import React from 'react'
import { useState } from "react";
import Carwebp from '../../assets/taxi-avecFond.png';
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

const TaxiText = ({ switchSide}) => {
  return(
    <div className="flex flex-col gap-5 max-w-3xl ">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif text-justify md:text-start"
              >
                En quoi consiste le métier de chauffeur professionnel Taxi ?
              </h1>
              <p data-aos="fade-up" className="text-justify text-2xl lg:text-lg leading-8 tracking-wide">
              Pour devenir chauffeur de taxi, il faut réussir un examen théorique et pratique organisé par les chambres de métiers. Cet examen vérifie l&apos;aptitude à transporter des passagers en toute sécurité, à respecter les règles professionnelles et à expliquer clairement la facturation. Les critères d&apos;évaluation sont définis par l&apos;arrêté du 6 avril 2017. L&apos;objectif est de garantir des services professionnels et de qualité.
              </p>
              <p data-aos="fade-up" className='text-2xl lg:text-lg'>
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

const Taxi = () => {
    const [count, setCount] = useState(true);
  
    const switchSide = () => {
      setCount(() => false);
    };
  
    return (
      <div className="dark:bg-dark bg-slate-100 sm:min-h-[400px] sm:grid sm:place-items-center duration-300">
        <div className="container pt-16 pb-8 px-0">
          <div className="grid xl:grid-cols-2 place-items-center gap-10 lg:gap-16">
            <div data-aos="slide-right" data-aos-duration="1500">
            <img
  src={Carwebp}
  alt="photo de voiture"
  className="sm:scale-110 sm:-translate-x-6 max-h-[300px] max-w-[90%] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
/>
            </div>
            <div>
              {count ? <TaxiText switchSide={switchSide} /> : <Formation/>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Taxi;