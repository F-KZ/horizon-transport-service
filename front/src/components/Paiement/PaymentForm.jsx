import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FaCreditCard } from 'react-icons/fa';
import { BACK_API,LOCAL_BACK } from '../utils/constant';
import card from '../../assets/pngegg.png';

const PaymentForm = ({ type, formation, price, title }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-[#FFC727] hover:bg-[#FFC727]/90 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <FaCreditCard />
        {loading ? 'Traitement...' : 'Payer maintenant'}
      </button>

      <div className="mt-8 text-center text-gray-400">
        <p>Paiement sécurisé par Stripe</p>
        <div className="flex justify-center gap-2 mt-2">
          <img src={card} alt="Visa" className="h-[4rem] w-[4rem]" />
        </div>
      </div>
    </form>
  );
};

export default PaymentForm; 