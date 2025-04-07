import React, { useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

const FormulesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto mt-[3rem]">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Nos Formules de Formation</h1>
          
          {/* VTC Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6">Formations VTC</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Pratique 3h</h3>
                <p className="text-3xl font-bold text-blue-500 mb-4">380€</p>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ 3 heures de formation pratique</li>
                  <li>✓ Préparation à l'examen VTC</li>
                  <li>✓ Accompagnement personnalisé</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Pratique 7h</h3>
                <p className="text-3xl font-bold text-blue-500 mb-4">580€</p>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ 7 heures de formation pratique</li>
                  <li>✓ Préparation intensive à l'examen</li>
                  <li>✓ Suivi personnalisé</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Initiale Complète</h3>
                <p className="text-3xl font-bold text-blue-500 mb-4">2449€</p>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ Formation complète VTC</li>
                  <li>✓ Théorie et pratique</li>
                  <li>✓ Accompagnement jusqu'à l'examen</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Taxi Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6">Formations Taxi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Pratique 3h</h3>
                <p className="text-3xl font-bold text-blue-500 mb-4">680€</p>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ 3 heures de formation pratique</li>
                  <li>✓ Préparation à l'examen Taxi</li>
                  <li>✓ Accompagnement personnalisé</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Pratique 7h</h3>
                <p className="text-3xl font-bold text-blue-500 mb-4">780€</p>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ 7 heures de formation pratique</li>
                  <li>✓ Préparation intensive à l'examen</li>
                  <li>✓ Suivi personnalisé</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Initiale Complète</h3>
                <p className="text-3xl font-bold text-blue-500 mb-4">2449€</p>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ Formation complète Taxi</li>
                  <li>✓ Théorie et pratique</li>
                  <li>✓ Accompagnement jusqu'à l'examen</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Indépendants Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500 mb-6">Pour les Indépendants</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Location de Voiture</h3>
              <p className="text-3xl font-bold text-blue-500 mb-4">100€</p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Location de véhicule uniquement</li>
                <li>✓ Véhicule conforme aux normes</li>
                <li>✓ Assurance incluse</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/paiement">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                Je m'inscris
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default FormulesDetail; 