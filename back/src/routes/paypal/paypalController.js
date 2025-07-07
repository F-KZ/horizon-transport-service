import paypal from '@paypal/paypal-server-sdk';

// Configuration PayPal
let environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);

if (process.env.NODE_ENV === 'production') {
  environment = new paypal.core.LiveEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  );
}

const client = new paypal.core.PayPalHttpClient(environment);

export const createPayPalOrder = async (req, res) => {
  try {
    const { amount, type, formation, title } = req.body;

    // Validation des données
    if (!type || !amount) {
      return res.status(400).json({ error: 'Type et montant requis' });
    }

    if (typeof amount !== 'string' || parseFloat(amount) <= 0) {
      return res.status(400).json({ error: 'Montant invalide' });
    }

    // Création de la commande PayPal
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'EUR',
          value: amount
        },
        description: `Formation ${type.toUpperCase()} - ${formation}`,
        custom_id: `${type}_${formation}_${Date.now()}`
      }],
      application_context: {
        return_url: `${process.env.FRONT_URL}/paypal/success`,
        cancel_url: `${process.env.FRONT_URL}/payment/cancel`,
        brand_name: 'Horizon Transports',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
        shipping_preference: 'NO_SHIPPING'
      }
    });

    const order = await client.execute(request);

    res.json({
      orderId: order.result.id,
      approvalUrl: order.result.links.find(link => link.rel === 'approve').href
    });

  } catch (error) {
    console.error('PayPal error:', error);
    res.status(500).json({ error: 'Erreur lors de la création de la commande PayPal' });
  }
};

export const capturePayPalOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: 'Order ID requis' });
    }

    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    const capture = await client.execute(request);

    if (capture.result.status === 'COMPLETED') {
      // Ici tu peux ajouter la logique pour sauvegarder la commande en base
      res.json({ 
        status: 'success',
        transactionId: capture.result.purchase_units[0].payments.captures[0].id
      });
    } else {
      res.status(400).json({ error: 'Paiement non complété' });
    }

  } catch (error) {
    console.error('PayPal capture error:', error);
    res.status(500).json({ error: 'Erreur lors de la capture du paiement' });
  }
};

export const getPayPalOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const request = new paypal.orders.OrdersGetRequest(orderId);
    const order = await client.execute(request);

    res.json(order.result);

  } catch (error) {
    console.error('PayPal get order error:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de la commande' });
  }
}; 