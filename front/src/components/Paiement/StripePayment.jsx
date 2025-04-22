import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import Navbar2 from '../Navbar/Navbar2';
import { FaArrowLeft } from 'react-icons/fa';
import { BACK_API, PUBLIC_KEY_STRIPE, LOCAL_BACK } from '../utils/constant';

const stripePromise = loadStripe(`${PUBLIC_KEY_STRIPE}`);


const StripePayment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get('type');
  const formation = searchParams.get('formation');
  const price = searchParams.get('price');
  const title = searchParams.get('title');

  return (
    <div className="min-h-screen-[68vh] bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>

      <div className="pt-20 pb-12 mt-[6rem] px-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            Retour
          </button>

          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
            <div className="mb-8">
              <p className="text-gray-300">Type: {type.toUpperCase()}</p>
              <p className="text-gray-300">Formation: {formation}</p>
            </div>
            
            <Elements stripe={stripePromise}>
              <PaymentForm 
                type={type}
                formation={formation}
                price={price}
                title={title}
              />
            </Elements>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Montant total à payer</p>
              <p className="text-xl font-semibold text-[#FFC727]">{price}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripePayment; 