import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FaCreditCard, FaPaypal } from 'react-icons/fa';
import { BACK_API,LOCAL_BACK } from '../utils/constant';
import card from '../../assets/pngegg.png';

const PaymentForm = ({ type, formation, price, title }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe'); // 'stripe' or 'paypal'
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  // Charger le SDK PayPal
  useEffect(() => {
    if (paymentMethod === 'paypal' && !paypalLoaded) {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=EUR&env=${import.meta.env.VITE_PAYPAL_ENV}`;
      script.onload = () => {
        setPaypalLoaded(true);
        initializePayPalButtons();
      };
      document.body.appendChild(script);

      return () => {
        // Cleanup
        const existingScript = document.querySelector(`script[src*="paypal.com/sdk/js"]`);
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [paymentMethod, paypalLoaded]);

  const initializePayPalButtons = () => {
    if (window.paypal) {
      window.paypal.Buttons({
        style: {
          shape: "rect",
          layout: "vertical",
          color: "gold",
          label: "paypal",
        },
        env: import.meta.env.VITE_PAYPAL_ENV,
        async createOrder() {
          try {
            const response = await fetch(`${BACK_API}/paypal/create-order`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                amount: price,
                type: type,
                formation: formation,
                title: title
              }),
            });

            const orderData = await response.json();

            if (orderData.orderId) {
              return orderData.orderId;
            }
            
            throw new Error(orderData.error || 'Erreur lors de la création de la commande');
          } catch (error) {
            console.error('PayPal createOrder error:', error);
            setError('Erreur lors de la création de la commande PayPal');
            throw error;
          }
        },
        async onApprove(data, actions) {
          try {
            setLoading(true);
            const response = await fetch(`${BACK_API}/paypal/capture-order`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ orderId: data.orderID }),
            });

            const orderData = await response.json();

            if (orderData.status === 'success') {
              // Redirection vers la page de succès
              window.location.href = `${BACK_API}/paypal/success?orderId=${data.orderID}`;
            } else {
              throw new Error(orderData.error || 'Erreur lors de la capture du paiement');
            }
          } catch (error) {
            console.error('PayPal onApprove error:', error);
            setError('Erreur lors du traitement du paiement PayPal');
          } finally {
            setLoading(false);
          }
        },
        onError: (err) => {
          console.error('PayPal error:', err);
          setError('Erreur PayPal: ' + err.message);
        }
      }).render('#paypal-button-container');
    }
  };

  const handleStripeSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BACK_API}/stripe/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseInt(price) * 100,
          type: type,
          formation: formation,
          title: title
        }),
      });

      const session = await response.json();

      if (session.error) {
        setError(session.error);
        return;
      }

      window.location.href = session.url;

    } catch (err) {
      setError('Une erreur est survenue lors du traitement du paiement');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg">
          {error}
        </div>
      )}

      {/* Choix de méthode de paiement */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white mb-4">Choisissez votre méthode de paiement</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Bouton Stripe */}
          <button
            onClick={() => setPaymentMethod('stripe')}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              paymentMethod === 'stripe' 
                ? 'border-[#FFC727] bg-[#FFC727]/10' 
                : 'border-gray-600 hover:border-gray-500'
            }`}
          >
            <div className="flex items-center gap-3">
              <FaCreditCard className="text-2xl text-[#FFC727]" />
              <div className="text-left">
                <p className="font-semibold text-white">Carte bancaire</p>
                <p className="text-sm text-gray-400">Visa, Mastercard, etc.</p>
              </div>
            </div>
          </button>

          {/* Bouton PayPal */}
          <button
            onClick={() => setPaymentMethod('paypal')}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              paymentMethod === 'paypal' 
                ? 'border-[#FFC727] bg-[#FFC727]/10' 
                : 'border-gray-600 hover:border-gray-500'
            }`}
          >
            <div className="flex items-center gap-3">
              <FaPaypal className="text-2xl text-[#0070BA]" />
              <div className="text-left">
                <p className="font-semibold text-white">PayPal</p>
                <p className="text-sm text-gray-400">Compte PayPal ou carte</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Formulaire de paiement */}
      {paymentMethod === 'stripe' ? (
        <form onSubmit={handleStripeSubmit} className="space-y-6">
          <button
            type="submit"
            disabled={!stripe || loading}
            className="w-full bg-[#FFC727] hover:bg-[#FFC727]/90 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <FaCreditCard />
            {loading ? 'Traitement...' : 'Payer avec carte'}
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          {!paypalLoaded && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0070BA] mx-auto"></div>
              <p className="text-gray-400 mt-2">Chargement PayPal...</p>
            </div>
          )}
          <div id="paypal-button-container"></div>
        </div>
      )}

      <div className="mt-8 text-center text-gray-400">
        <p>Paiement sécurisé</p>
        <div className="flex justify-center gap-2 mt-2">
          <img src={card} alt="Visa" className="h-[4rem] w-[4rem]" />
          <div className="flex items-center">
            <FaPaypal className="text-[#0070BA] text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm; 