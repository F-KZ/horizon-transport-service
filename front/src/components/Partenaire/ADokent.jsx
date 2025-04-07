import React from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

const ADokent = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto mt-[4rem]">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">A.Dokent</h1>
            <p className="text-xl text-gray-400">Votre plateforme d'apprentissage en ligne</p>
          </div>

          {/* Section Principale */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Une plateforme d'excellence</h2>
                <p className="text-gray-300 mb-4">
                  A.Dokent est notre partenaire privilégié pour la formation en ligne. Cette plateforme innovante 
                  vous offre un accès exclusif à l'ensemble de nos cours pédagogiques après votre inscription.
                </p>
                <p className="text-gray-300">
                  Grâce à son interface intuitive et ses fonctionnalités avancées, vous pourrez suivre votre 
                  formation à votre rythme, où que vous soyez.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Fonctionnalités principales</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <svg className="h-5 w-5 text-[#DC2626] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Accès illimité aux cours
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="h-5 w-5 text-[#DC2626] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Suivi de progression
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="h-5 w-5 text-[#DC2626] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Support pédagogique
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="h-5 w-5 text-[#DC2626] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Exercices pratiques
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section Avantages */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Pourquoi choisir A.Dokent ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-[#DC2626] mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Flexibilité totale</h3>
                <p className="text-gray-300">Apprenez à votre rythme, 24h/24 et 7j/7</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-[#DC2626] mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Contenu de qualité</h3>
                <p className="text-gray-300">Cours structurés et mis à jour régulièrement</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-[#DC2626] mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Support communautaire</h3>
                <p className="text-gray-300">Échangez avec d'autres apprenants</p>
              </div>
            </div>
          </div>

          {/* Section CTA */}
          <div className="flex md:flex-row md:justify-center flex-col space-x-4">
          <div className="text-center">
            <Link
              to="/payment"
              className="inline-block bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              je choisis ma formation
            </Link>
          </div>
          <div className="text-center">
            <Link
              to="https://learn.dokent.com/login/index.php"
              className="inline-block bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Commencer ma formation
            </Link>
            </div>
            </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default ADokent; 