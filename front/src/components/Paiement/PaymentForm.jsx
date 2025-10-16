import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FaCreditCard, FaPaypal, FaUser } from 'react-icons/fa';
import { BACK_API,LOCAL_BACK } from '../utils/constant';
import card from '../../assets/pngegg.png';
import cpf from '../../assets/logo-cpf.png';
import { Link } from 'react-router-dom';


const PaymentForm = ({ type, formation, price, title, url }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe'); // 'stripe' or 'paypal'

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
          amount: parseInt(price) * 100, // price already includes VAT
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

  const handlePayPalSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log('Creating PayPal order with data:', {
        amount: price, // price already includes VAT
        type: type,
        formation: formation,
        title: title
      });

      const response = await fetch(`${BACK_API}/paypal/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: price, // price already includes VAT
          type: type,
          formation: formation,
          title: title
        }),
      });

      const data = await response.json();

      console.log('PayPal order response:', data);

      if (data.error) {
        setError(data.error);
        return;
      }

      // Rediriger vers PayPal
      window.location.href = data.approvalUrl;

    } catch (err) {
      console.error('PayPal submit error:', err);
      setError('Une erreur est survenue lors de la création de la commande PayPal');
    } finally {
      setLoading(false);
    }
  };

  const handleCPFSubmit = async () => {
    setLoading(true);
    try {
      console.log('Redirection vers CPF...');
      if (url) {
        window.open(url, '_blank');
      } else {
        console.error('URL CPF non définie pour cette formation');
      }
    } catch (error) {
      console.error('Erreur redirection CPF:', error);
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
        
        <div className="grid grid-cols-1 gap-4">
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
              <div className="text-center  w-full">
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
              <div className="text-center  w-full">
                <p className="font-semibold text-white">Paypal</p>
                <p className="text-sm text-gray-400">Compte Paypal</p>
              </div>
            </div>
          </button>

          { formation =='complete' || formation =='mobilité professionnelle' ?
          <button
            onClick={() => setPaymentMethod('cpf')}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              paymentMethod === 'cpf' 
                ? 'border-[#FFC727] bg-[#FFC727]/10' 
                : 'border-gray-600 hover:border-gray-500'
            }`}
          >
            <div className="flex items-center gap-3">
              <img src={cpf} className="w-7" />
              <div className="text-center w-full">
                <p className="font-semibold text-white">Mon compte CPF</p>
                <p className="text-sm text-gray-400">Formation éligible au CPF</p>
              </div>
            </div>
          </button> : null }
  

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
) : paymentMethod === 'paypal' ? (
  <button
    onClick={handlePayPalSubmit}
    disabled={loading}
    className="w-full bg-[#0070BA] hover:bg-[#0070BA]/90 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
  >
    <FaPaypal />
    {loading ? 'Redirection...' : 'Payer avec PayPal'}
  </button>
) : (
  <button
    onClick={handleCPFSubmit}
    disabled={loading}
    className="w-full bg-[#00A86B] hover:bg-[#00A86B]/90 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
  >
    {/* Vous pouvez ajouter une icône CPF si vous en avez une */}
    <FaUser /> {/* Exemple d'icône */}
    {loading ? 'Traitement...' : 'Faire le devis avec mon compte CPF'}
  </button>
)}
          

      <div className="mt-8 text-center text-gray-400">
        <p>Paiement sécurisé</p>
        <div className="flex justify-center gap-2 mt-2">
          <img src={card} alt="Visa" className="h-[4rem] w-[4rem]" />
          <img src={cpf} alt="logo CPF" className="h-[4rem] w-[4rem]" />
          <div className="flex items-center">
            <FaPaypal className="text-[#0070BA] text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm; 