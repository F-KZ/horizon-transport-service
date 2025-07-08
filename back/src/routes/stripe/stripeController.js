import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const stripeCheckout = async (req, res) => {
    try {
        const { amount, type, formation, title } = req.body;

        // Validation des données
        if (!type || !amount) {
            return res.status(400).json({ error: 'Type et montant requis' });
        }

        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ error: 'Montant invalide' });
        }

        // Calculate price breakdown for description
        const priceWithVAT = amount / 100; // Convert from cents to euros
        const priceWithoutVAT = Math.round(priceWithVAT / 1.2);
        const vatAmount = priceWithVAT - priceWithoutVAT;

        // Création de la session Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: title,
                            description: `Formation ${type.toUpperCase()} - ${formation} (Prix HT: ${priceWithoutVAT}€ + TVA 20%: ${vatAmount}€ = Total TTC: ${priceWithVAT}€)`,
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONT_URL}/payment/success`,
            cancel_url: `${process.env.FRONT_URL}/payment/cancel`,
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: 'Erreur lors de la création de la session de paiement' });
    }
};

export const stripeComplete = async (req, res) => {
    res.send('Paiement réussi !');
};

export const stripeCancel = async (req, res) => {
    res.send('Paiement annulé.');
};