import React from 'react'
import { useState } from "react";
import Carwebp from '../../assets/minibus-avecFond.png';
import { Link } from 'react-router-dom';
const scrollToSection = () => {
  // Sélectionner la section à laquelle vous souhaitez faire défiler en utilisant son ID
  const section = document.getElementById('contact');

  // Vérifier si la section existe
  if (section) {
    // Faire défiler jusqu'à la section
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const CapacitéNeufPersonnesText = ({ switchSide}) => {
  return(
    <div className="flex flex-col gap-5 max-w-3xl  ">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif text-justify md:text-start"
              >
                En quoi consiste la capacité de transport n'éxcédant pas neuf places ?
              </h1>
              <p data-aos="fade-up" className="text-justify leading-8 tracking-wide">
              L&apos;attestation de capacité professionnelle en transport routier de personnes avec des véhicules n&apos;excédant pas neuf places permet à son titulaire de diriger en tant que "gestionnaire de transport" les activités de transport d&apos;une entreprise de transport "léger" de personnes inscrite au registre électronique national des entreprises de transport par route.
              </p>
              <p data-aos="fade-up">
                N&apos;attendez plus, rejoignez-nous sans plus attendre !
              </p>
              <Link to="/formules">
              <button
               data-aos="fade-up" className="button-outline">
                Je suis intéressé !
                </button>
              </Link>
            </div>
  )
}

const CapacitéNeufPersonnes = () => {
    const [count, setCount] = useState(true);
  
    const switchSide = () => {
      setCount(() => false);
    };
  
    return (
      <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
        <div className="container pt-16 pb-8 px-0">
          <div className="grid xl:grid-cols-2 place-items-center gap-10 lg:gap-16">
            <div data-aos="slide-right" data-aos-duration="1500">
              <img
                src={Carwebp}
                alt=" photo de voiture"
                className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
              />
            </div>
            <div>
              {count ? <CapacitéNeufPersonnesText switchSide={switchSide} /> : <Formation/>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CapacitéNeufPersonnes;