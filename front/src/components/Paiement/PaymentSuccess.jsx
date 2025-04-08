import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';
import { BACK_API } from '../utils/constant';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const sessionId = searchParams.get('session_id');
        if (!sessionId) {
          setStatus('error');
          return;
        }

        const response = await fetch(`${BACK_API}/stripe/complete?session_id=${sessionId}`);
        const data = await response.json();

        if (data.status === 'success') {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Erreur de vérification:', error);
        setStatus('error');
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      
      <div className="pt-20 pb-12 px-4 mt-[10rem]">
        <div className="max-w-2xl mx-auto text-center">
          {status === 'loading' && (
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1E3A8A] mx-auto mb-4"></div>
          )}

          {status === 'success' && (
            <>
              <div className="bg-green-900/50 border border-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Paiement réussi !</h1>
              <p className="text-gray-400 mb-8">
                Merci pour votre inscription. Vous recevrez un email de confirmation avec les détails de votre formation.
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="bg-red-900/50 border border-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Une erreur est survenue</h1>
              <p className="text-gray-400 mb-8">
                Nous n'avons pas pu vérifier votre paiement. Veuillez contacter notre support si le problème persiste.
              </p>
            </>
          )}

          <Link
            to="/"
            className="inline-block bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 