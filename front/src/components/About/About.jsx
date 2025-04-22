import React from "react";
import Carwebp from "../../assets/vtc-noir.png";
import { useState } from "react";
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

const Profession = ({ switchSide}) => {
  return(
    <div className="flex flex-col gap-5 max-w-3xl  ">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif text-justify md:text-start"
              >
                En quoi consiste le métier de chauffeur professionnel ?
              </h1>
              <p data-aos="fade-up" className="text-justify leading-8 tracking-wide">
              Celui-ci consiste à conduire des véhicules terrestres privés,
              destinés au transport payant de passagers et de leurs bagages, par un chauffeur qualifié.<br/>
              Souvent les VTC optent pour un véhicule haut de gamme. <br/>
              La réservation préalable est obligatoire, ainsi le montant de la course est connu d&apos;avance;
              c&apos;est la différence entre un Taxi et un VTC.
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

const Formation = () => {
  return(
    <div className="space-y-5">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                En quoi consiste la formation ?
              </h1>
              <p data-aos="fade-up" className="text-justify leading-8 tracking-wide">
              Notre objectif c’est votre réussite à l’examen de votre choix, votre examen est structuré en deux parties :
              </p>
              <p data-aos="fade-up">
              1. Une épreuve d’admissibilité (la théorie)
              <br/>
              2. Une épreuve d’admission (la conduite)
              </p>
          
            </div>
  )
}




const About = () => {
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
            {count ? <Profession switchSide={switchSide} /> : <Formation/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
