import React from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';

const PaymentCancel = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      
      <div className="pt-20 pb-12 px-4 mt-[10rem]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-yellow-900/50 border border-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Paiement annulé</h1>
          <p className="text-gray-400 mb-8">
            Votre paiement a été annulé. Vous pouvez réessayer quand vous le souhaitez.
          </p>

          <Link
            to="/payment"
            className="inline-block bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Réessayer le paiement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel; 