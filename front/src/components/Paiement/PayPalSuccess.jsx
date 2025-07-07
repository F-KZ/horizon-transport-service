import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';
import { BACK_API } from '../utils/constant';

const PayPalSuccess = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const capturePayment = async () => {
      try {
        const orderId = searchParams.get('token'); // PayPal retourne 'token' au lieu de 'session_id'
        
        if (!orderId) {
          setStatus('error');
          setError('Aucun ID de commande trouvé');
          return;
        }

        // Capturer le paiement PayPal
        const response = await fetch(`${BACK_API}/paypal/capture-order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId }),
        });

        const data = await response.json();

        if (data.status === 'success') {
          setStatus('success');
        } else {
          setStatus('error');
          setError(data.error || 'Erreur lors de la capture du paiement');
        }
      } catch (error) {
        console.error('Erreur de capture PayPal:', error);
        setStatus('error');
        setError('Erreur de connexion au serveur');
      }
    };

    capturePayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      
      <div className="pt-20 pb-12 px-4 mt-[10rem]">
        <div className="max-w-2xl mx-auto text-center">
          {status === 'loading' && (
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#0070BA] mx-auto mb-4"></div>
          )}

          {status === 'success' && (
            <>
              <div className="bg-green-900/50 border border-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Paiement PayPal réussi !</h1>
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
              <p className="text-gray-400 mb-4">
                {error}
              </p>
              <p className="text-gray-400 mb-8">
                Veuillez contacter notre support si le problème persiste.
              </p>
            </>
          )}

          <Link
            to="/"
            className="inline-block bg-[#0070BA] hover:bg-[#0070BA]/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PayPalSuccess; 