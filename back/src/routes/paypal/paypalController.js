import dotenv from 'dotenv'

dotenv.config()

// Import dynamique de PayPal SDK
let paypal;
let client;

const initializePayPal = async () => {
  if (!paypal) {
    const paypalModule = await import('@paypal/paypal-server-sdk');
    paypal = paypalModule.default;
    
    // Configuration PayPal - Production par défaut
    const isProduction = process.env.NODE_ENV === 'production' || process.env.PAYPAL_ENVIRONMENT === 'production';
    
    client = new paypal.Client({
      clientCredentialsAuthCredentials: {
        oAuthClientId: process.env.PAYPAL_CLIENT_ID,
        oAuthClientSecret: process.env.PAYPAL_CLIENT_SECRET
      },
      timeout: 0,
      environment: isProduction ? paypal.Environment.Production : paypal.Environment.Sandbox,
      logging: {
        logLevel: paypal.LogLevel.Info,
        logRequest: {
          logBody: true
        },
        logResponse: {
          logHeaders: true
        }
      },
    });

    console.log(`PayPal environment: ${isProduction ? 'PRODUCTION' : 'SANDBOX'}`);
  }
};

export const createPayPalOrder = async (req, res) => {
  try {
    await initializePayPal();
    
    const { amount, type, formation, title } = req.body;

    // Validation des données
    if (!type || !amount) {
      return res.status(400).json({ error: 'Type et montant requis' });
    }

    if (typeof amount !== 'string' && typeof amount !== 'number') {
      return res.status(400).json({ error: 'Montant invalide' });
    }

    // Calculate price breakdown for description
    const priceWithVAT = parseFloat(amount);
    const priceWithoutVAT = Math.round(priceWithVAT / 1.2);
    const vatAmount = priceWithVAT - priceWithoutVAT;

    // Création de la commande PayPal avec la nouvelle API
    const ordersController = new paypal.OrdersController(client);
    
    const requestBody = {
      intent: 'CAPTURE',
      purchaseUnits: [{
        amount: {
          currencyCode: 'EUR',
          value: amount.toString()
        },
        description: `Formation ${type.toUpperCase()} - ${formation} (Prix HT: ${priceWithoutVAT}€ + TVA 20%: ${vatAmount}€ = Total TTC: ${priceWithVAT}€)`,
        customId: `${type}_${formation}_${Date.now()}`
      }],
      applicationContext: {
        returnUrl: `${process.env.FRONT_URL}/paypal/success`,
        cancelUrl: `${process.env.FRONT_URL}/payment/cancel`,
        brandName: 'Horizon Transports',
        landingPage: 'BILLING',
        userAction: 'PAY_NOW',
        shippingPreference: 'NO_SHIPPING'
      }
    };

    const order = await ordersController.createOrder({ body: requestBody });

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
    await initializePayPal();
    
    const { orderId } = req.body;

    console.log('=== PAYPAL CAPTURE DEBUG ===');
    console.log('Request body:', req.body);
    console.log('OrderId received:', orderId);
    console.log('OrderId type:', typeof orderId);

    if (!orderId) {
      console.log('OrderId is missing or undefined');
      return res.status(400).json({ error: 'Order ID requis' });
    }

    const ordersController = new paypal.OrdersController(client);
    
    console.log('Attempting to capture order with ID:', orderId);
    
    const capture = await ordersController.captureOrder({ id: orderId });

    console.log('Capture result:', capture.result);
    console.log('Capture status:', capture.result.status);

    if (capture.result.status === 'COMPLETED') {
      console.log('Payment completed successfully');
      // Ici tu peux ajouter la logique pour sauvegarder la commande en base
      res.json({ 
        status: 'success',
        transactionId: capture.result.purchaseUnits[0].payments.captures[0].id
      });
    } else {
      console.log('Payment not completed, status:', capture.result.status);
      res.status(400).json({ error: 'Paiement non complété' });
    }

  } catch (error) {
    console.error('=== PAYPAL CAPTURE ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({ error: 'Erreur lors de la capture du paiement' });
  }
};

export const getPayPalOrder = async (req, res) => {
  try {
    await initializePayPal();
    
    const { orderId } = req.params;

    const ordersController = new paypal.OrdersController(client);
    const order = await ordersController.getOrder(orderId);

    res.json(order.result);

  } catch (error) {
    console.error('PayPal get order error:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de la commande' });
  }
}; 