import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

const Cancel = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8 text-center">
        <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-white mb-4">Paiement annulé</h1>
        <p className="text-gray-300 mb-8">
          Le paiement a été annulé. Si vous avez des questions, n'hésitez pas à nous contacter.
        </p>
        <div className="space-y-4">
          <Link
            to="/formules"
            className="inline-block bg-[#FFC727] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#FFC727]/90 transition-colors w-full"
          >
            Retour aux formations
          </Link>
          <Link
            to="/"
            className="inline-block bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors w-full"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel; 