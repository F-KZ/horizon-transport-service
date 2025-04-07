import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST)

export const stripeCheckout = async (req, res) => {
    try {
        const { type, amount } = req.body;

        // Validation des données
        if (!type || !amount) {
            return res.status(400).json({ error: 'Type et montant requis' });
        }

    

        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ error: 'Montant invalide' });
        }

        // Création de la session Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: `Formation ${type}`,
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/payment/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:5173/payment/cancel',
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Erreur Stripe:', error);
        res.status(500).json({ error: 'Erreur lors de la création de la session de paiement' });
    }
};

export const stripeComplete = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
        res.json({ status: 'success', session });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la vérification du paiement' });
    }
};

export const stripeCancel = async (req, res) => {
    res.json({ status: 'cancelled' });
};