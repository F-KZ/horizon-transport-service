import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import ScrollToTop from '../ScrollToTop';

const stripePromise = loadStripe('pk_live_51QusZyL29Sc2AZsdrdazGdAxHruNw7Rj24hSpWTVpecLUHmToZwrkBUd3PFGWLCZaPULbYc0IixMNy2aUlp0TdQ000rb58wxCO');

const pricingOptions = [
  {
    id: 'vtc-3h',
    name: 'Formation VTC 3h',
    price: 380,
    type: 'VTC',
    duration: '3h'
  },
  {
    id: 'vtc-7h',
    name: 'Formation VTC 7h',
    price: 580,
    type: 'VTC',
    duration: '7h'
  },
  {
    id: 'vtc-complete',
    name: 'Formation VTC Complète',
    price: 2449,
    type: 'VTC',
    duration: 'Complète'
  },
  {
    id: 'taxi-3h',
    name: 'Formation Taxi 3h',
    price: 680,
    type: 'Taxi',
    duration: '3h'
  },
  {
    id: 'taxi-7h',
    name: 'Formation Taxi 7h',
    price: 780,
    type: 'Taxi',
    duration: '7h'
  },
  {
    id: 'taxi-complete',
    name: 'Formation Taxi Complète',
    price: 2449,
    type: 'Taxi',
    duration: 'Complète'
  },
  {
    id: 'location',
    name: 'Location de Voiture',
    price: 100,
    type: 'Location',
    duration: 'Mensuelle'
  }
];

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!selectedOption) {
      setError('Veuillez sélectionner une formule');
      setLoading(false);
      return;
    }

    const selectedPricing = pricingOptions.find(option => option.id === selectedOption);

    try {
      const response = await fetch('https://d93a2273-3b8b-4f1e-98ed-b3c3fd7a39d5.eu-central-1.cloud.genez.io/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedPricing.price * 100,
          type: selectedPricing.type,
          duration: selectedPricing.duration
        }),
      });

      const session = await response.json();

      if (session.error) {
        setError(session.error);
        setLoading(false);
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
    <div className="max-w-4xl mx-auto mt-[3rem]">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Choisissez votre formation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {pricingOptions.map((option) => (
          <div
            key={option.id}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-200 ${
              selectedOption === option.id
                ? 'bg-blue-600 border-2 border-blue-400'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{option.name}</h3>
            <p className="text-3xl font-bold text-blue-500 mb-2">{option.price}€</p>
            <p className="text-gray-300">{option.type} - {option.duration}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Traitement...' : 'Payer maintenant'}
        </button>
      </form>

      <div className="mt-8 text-center text-gray-400">
        <p>Paiement sécurisé par Stripe</p>
      </div>
    </div>
  );
};

const StripePayment = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      
      <div className="pt-20 pb-12 px-4">
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default StripePayment; 