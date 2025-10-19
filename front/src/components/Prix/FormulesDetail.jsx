import React, { useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import { FaCheckCircle, FaCar, FaTaxi, FaTruck, FaCarSide } from 'react-icons/fa';
import { calculatePriceWithVAT, formatPriceWithVAT } from '../utils/constant';
import cpf from "../../assets/cpf.png"


const FormulesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FormulaCard = ({ title, description, price, type, formation, icon: Icon, img, url }) => {
    const priceWithVAT = calculatePriceWithVAT(parseInt(price));
    
    return (
      <div className=" flex flex-col bg-gray-800 p-6 justify-between rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FFC727]/20">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="text-3xl text-[#FFC727]" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">À partir de {formatPriceWithVAT(price)}</p>
            <p className="text-xs text-gray-500">Prix HT: {price}€ | TVA 20% incluse</p>
          </div>
          {
            img ? <img className="w-14" src={img} alt='logo CPF'/> : null
          }
        </div>
        <div className='flex flex-row justify-between lg:flex-col '>
        <p className="text-gray-300 mb-4 w-1/2 text-justify  lg:w-full ">{description}</p>
        <span>
        <Link 
          to={`/paiement?type=${type}&formation=${formation}&price=${priceWithVAT}&title=${title}${url ? `&url=${encodeURIComponent(url)}` : ''}`} 
          className="block lg:w-full bg-[#FFC727] text-black font-semibold py-3 px-4 rounded-lg text-center hover:bg-[#FFC727]/90 transition-colors mt-4 transform hover:scale-105"
        >
          S'inscrire
        </Link>
        </span>
        </div>
      </div>
    );
  };

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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <FormulaCard
                title="Formule Pratique examen VTC 3h"
                description="Formule examen pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux."
                price="380"
                type="vtc"
                formation="3h"
                icon={FaCar}
              />
              <FormulaCard
                title="Formule Pratique examen VTC 7h"
                description="Formule examen pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux. "
                price="580"
                type="vtc"
                formation="7h"
                icon={FaCar}
              />
              <FormulaCard
                title="Formation initiale VTC Complète"
                description="Formule complète examen théorique et pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux."
                price="2449"
                type="vtc"
                formation="complete"
                icon={FaCar}
                img={cpf}
                url="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/98145599100019_VTC-2025-01/98145599100019_VTC-2025-01"
              />
              <FormulaCard
                title="Formation Continue VTC"
                description="14 heures de formation obligatoire en présentiel."
                price="365"
                type="vtc"
                formation="continue"
                icon={FaCar}
              />
              <FormulaCard
                title="Formation Mobilité Professionnelle VTC > Taxi"
                description="Formule complète examen théorique et pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux."
                price="945"
                type="vtc"
                formation="mobilité professionnelle"
                icon={FaCar}
                img={cpf}
                url="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/98145599100019_VTC-2025-002/98145599100019_VTC-2025-002"
              />
              <FormulaCard
                title="Formation initiale VTC formule compléte coup de pouce"
                description="Formule complète pour budget sans financement examen théorique et pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux."
                price="1600"
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
                title="Formule Pratique examen Taxi 3h"
                description="Formule examen pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux. "
                price="480"
                type="taxi"
                formation="3h"
                icon={FaTaxi}
              />
              <FormulaCard
                title="Formule Pratique examen Taxi 7h"
                description="Formule examen pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux. "
                price="680"
                type="taxi"
                formation="7h"
                icon={FaTaxi}
              />
              <FormulaCard
                title="Formation initiale TAXI Complète"
                description="Formule complète examen théorique et pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux."
                price="2449"
                type="taxi"
                formation="complete"
                icon={FaTaxi}
                img={cpf}
                url="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/98145599100019_TX-2025-01/98145599100019_TX-2025-01"
              />
              <FormulaCard
                title="Formation Continue Taxi"
                description="14 heures de formation obligatoire en présentiel."
                price="365"
                type="taxi"
                formation="continue"
                icon={FaTaxi}
              />
              <FormulaCard
                title="Formation Mobilité Professionnelle Taxi > VTC"
                description="Formule complète examen théorique et pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux."
                price="825"
                type="taxi"
                formation="mobilité professionnelle"
                icon={FaTaxi}
                img={cpf}
                url="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/98145599100019_TX-2025-02/98145599100019_TX-2025-02"
              />

              <FormulaCard
                title="Formation Mobilité Taxi"
                description="14 heures de formation obligatoire en présentiel."
                price="465"
                type="taxi"
                formation="mobilite"
                icon={FaTaxi}
              />

<FormulaCard
                title="Formation initiale TAXI formule compléte coup de pouce"
                description="Formule complète pour budget sans financement examen théorique et pratique, véhicule double commande inclus avec confiseries, bouteilles d'eau, magazines et journaux."
                price="1600"
                type="vtc"
                formation="passerelle"
                icon={FaCar}
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
                title="Formation capacité léger de transport moins de 9 places"
                description="Formation pour le transport de personnes avec des véhicules de moins de 9 places"
                price="1999"
                type="transport"
                formation="9places"
                icon={FaTruck}
              />
              <FormulaCard
                title="Formation capacité léger de transport - 3T5"
                description="Formation pour le transport routier de marchandises au moyen de véhicules légers de moins de 3T5"
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
                price="99"
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