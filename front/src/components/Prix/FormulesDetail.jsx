import React, { useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import { FaCheckCircle, FaCar, FaTaxi, FaTruck, FaCarSide } from 'react-icons/fa';

const FormulesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FormulaCard = ({ title, description, price, type, formation, icon: Icon }) => (
    <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FFC727]/20">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="text-3xl text-[#FFC727]" />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">À partir de {price}€</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link 
        to={`/paiement?type=${type}&formation=${formation}&price=${price}&title=${title}`} 
        className="block w-full bg-[#FFC727] text-black font-semibold py-3 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4 transform hover:scale-105"
      >
        S'inscrire
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto pt-[3rem]">
          <h1 className="text-4xl font-bold text-center mb-4 text-white">Nos Formations</h1>
          <p className="text-gray-400 text-center mb-12">Découvrez nos formations adaptées à vos besoins</p>
          
          {/* Section VTC */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaCar className="text-3xl text-[#FFC727]" />
              <h2 className="text-3xl font-semibold text-[#FFC727]">Formation VTC</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormulaCard
                title="Formation VTC 3h"
                description="Formation courte pour les conducteurs expérimentés"
                price="380"
                type="vtc"
                formation="3h"
                icon={FaCar}
              />
              <FormulaCard
                title="Formation VTC 7h"
                description="Formation complète pour les nouveaux conducteurs"
                price="580"
                type="vtc"
                formation="7h"
                icon={FaCar}
              />
              <FormulaCard
                title="Formation VTC Complète"
                description="Formation intensive avec examen"
                price="2449"
                type="vtc"
                formation="complete"
                icon={FaCar}
              />
              <FormulaCard
                title="Formation Continue VTC"
                description="14 heures de formation pratique avec accompagnement personnalisé"
                price="365"
                type="vtc"
                formation="continue"
                icon={FaCar}
              />
              <FormulaCard
                title="Formation Passerelle VTC ou Taxi"
                description="14 heures de formation pratique avec préparation à l'examen"
                price="780"
                type="vtc"
                formation="passerelle"
                icon={FaCar}
              />
            </div>
          </div>

          {/* Section Taxi */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaTaxi className="text-3xl text-[#FFC727]" />
              <h2 className="text-3xl font-semibold text-[#FFC727]">Formation Taxi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormulaCard
                title="Formation Taxi 3h"
                description="Formation courte pour les conducteurs expérimentés"
                price="680"
                type="taxi"
                formation="3h"
                icon={FaTaxi}
              />
              <FormulaCard
                title="Formation Taxi 7h"
                description="Formation complète pour les nouveaux conducteurs"
                price="780"
                type="taxi"
                formation="7h"
                icon={FaTaxi}
              />
              <FormulaCard
                title="Formation Taxi Complète"
                description="Formation intensive avec examen"
                price="2449"
                type="taxi"
                formation="complete"
                icon={FaTaxi}
              />
              <FormulaCard
                title="Formation Continue Taxi"
                description="14 heures de formation pratique avec accompagnement personnalisé"
                price="350"
                type="taxi"
                formation="continue"
                icon={FaTaxi}
              />
              <FormulaCard
                title="Formation Mobilité Taxi"
                description="14 heures de formation pratique avec préparation à l'examen"
                price="350"
                type="taxi"
                formation="mobilite"
                icon={FaTaxi}
              />
            </div>
          </div>

          {/* Section Capacité de Transport */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaTruck className="text-3xl text-[#FFC727]" />
              <h2 className="text-3xl font-semibold text-[#FFC727]">Capacité de Transport</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormulaCard
                title="Véhicules n'excédant pas 9 places"
                description="Formation pour le transport de personnes avec des véhicules de moins de 9 places"
                price="1999"
                type="transport"
                formation="9places"
                icon={FaTruck}
              />
              <FormulaCard
                title="Transport Léger de Marchandises"
                description="Formation pour le transport routier de marchandises au moyen de véhicules légers"
                price="1500"
                type="transport"
                formation="leger"
                icon={FaTruck}
              />
            </div>
          </div>

          {/* Section Location de Voiture */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaCarSide className="text-3xl text-[#FFC727]" />
              <h2 className="text-3xl font-semibold text-[#FFC727]">Location de Voiture</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormulaCard
                title="Location de vehicule homologué"
                description="Location de véhicule homologué aux normes de l'examen avec assurance et assistance le jour de l'examen"
                price="100"
                type="location"
                formation="homologue"
                icon={FaCarSide}
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default FormulesDetail; 