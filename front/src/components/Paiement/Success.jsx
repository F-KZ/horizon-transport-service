import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8 text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-white mb-4">Paiement réussi !</h1>
        <p className="text-gray-300 mb-8">
          Merci pour votre confiance. Vous recevrez bientôt un email de confirmation avec les détails de votre formation.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#FFC727] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#FFC727]/90 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Success; 