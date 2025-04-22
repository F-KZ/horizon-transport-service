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
        <div className="max-w-6xl mx-auto pt-[3rem]">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Nos Formations</h1>
          
          {/* Section VTC */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#FFC727] mb-6">Formation VTC</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation VTC 3h</h3>
                <p className="text-gray-300 mb-4">Formation courte pour les conducteurs expérimentés</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">380€</p>
                </div>
                <Link 
                  to={`/paiement?type=vtc&formation=3h&price=380&title=Formation VTC 3h`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation VTC 7h</h3>
                <p className="text-gray-300 mb-4">Formation complète pour les nouveaux conducteurs</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">580€</p>
                </div>
                <Link 
                  to={`/paiement?type=vtc&formation=7h&price=580&title=Formation VTC 7h`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation VTC Complète</h3>
                <p className="text-gray-300 mb-4">Formation intensive avec examen</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">2449€</p>
                </div>
                <Link 
                  to={`/paiement?type=vtc&formation=complete&price=2449&title=Formation VTC Complète`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Continue VTC</h3>
                <p className="text-gray-300 mb-4">14 heures de formation pratique avec accompagnement personnalisé</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">350€</p>
                </div>
                <Link 
                  to={`/paiement?type=vtc&formation=continue&price=350&title=Formation Continue VTC`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Passerelle VTC ou Taxi</h3>
                <p className="text-gray-300 mb-4">14 heures de formation pratique avec préparation à l'examen</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">780€</p>
                </div>
                <Link 
                  to={`/paiement?type=vtc&formation=passerelle&price=780&title=Formation Passerelle VTC ou Taxi`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>

          {/* Section Taxi */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#FFC727] mb-6">Formation Taxi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Taxi 3h</h3>
                <p className="text-gray-300 mb-4">Formation courte pour les conducteurs expérimentés</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">680€</p>
                </div>
                <Link 
                  to={`/paiement?type=taxi&formation=3h&price=680&title=Formation Taxi 3h`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Taxi 7h</h3>
                <p className="text-gray-300 mb-4">Formation complète pour les nouveaux conducteurs</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">780€</p>
                </div>
                <Link 
                  to={`/paiement?type=taxi&formation=7h&price=780&title=Formation Taxi 7h`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Taxi Complète</h3>
                <p className="text-gray-300 mb-4">Formation intensive avec examen</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">2449€</p>
                </div>
                <Link 
                  to={`/paiement?type=taxi&formation=complete&price=2449&title=Formation Taxi Complète`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Continue Taxi</h3>
                <p className="text-gray-300 mb-4">14 heures de formation pratique avec accompagnement personnalisé</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">350€</p>
                </div>
                <Link 
                  to={`/paiement?type=taxi&formation=continue&price=350&title=Formation Continue Taxi`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Formation Mobilité Taxi</h3>
                <p className="text-gray-300 mb-4">14 heures de formation pratique avec préparation à l'examen</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">350€</p>
                </div>
                <Link 
                  to={`/paiement?type=taxi&formation=mobilite&price=350&title=Formation Mobilité Taxi`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>

          {/* Nouvelle Section Capacité de Transport */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#FFC727] mb-6">Capacité de Transport</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Véhicules n'excédant pas 9 places</h3>
                <p className="text-gray-300 mb-4">Formation pour le transport de personnes avec des véhicules de moins de 9 places</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">1999€</p>
                </div>
                <Link 
                  to={`/paiement?type=transport&formation=9places&price=1999&title=Véhicules n'excédant pas 9 places`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Transport Léger de Marchandises</h3>
                <p className="text-gray-300 mb-4">Formation pour le transport routier de marchandises au moyen de véhicules légers</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">1500€</p>
                </div>
                <Link 
                  to={`/paiement?type=transport&formation=leger&price=1500&title=Transport Léger de Marchandises`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>

          {/* Section Location de Voiture */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#FFC727] mb-6">Location de Voiture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Location de vehicule homologué</h3>
                <p className="text-gray-300 mb-4">Location de véhicule homologué aux normes de l'examen avec assurance et assistance le jour de l'examen</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Montant total</p>
                  <p className="text-lg font-semibold text-[#FFC727]">100€</p>
                </div>
                <Link 
                  to={`/paiement?type=location&formation=homologue&price=100&title=Location de vehicule homologué`} 
                  className="block w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4"
                >
                  S'inscrire
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default FormulesDetail; 