import React from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import borcel from "../../assets/logo.webp";
import qualio from "../../assets/qualio-action.webp";
import cpf from "../../assets/logo-cpf.png"
import Programme from "../programme/Programme";
import Taxi from "../programme/Taxi";
import Certificat from "../programme/Certificat";



const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-8 rounded-t-2xl">
      <section className="px-4 sm:px-6">
        <div className="flex flex-row items-center flex-wrap py-4 justify-around">
          <div className="flex flex-col xl:flex-row xl:w-full justify-between gap-4 xl:gap-6">
          {/* company Details */}
           <img
            width={160}
            src={borcel}
            alt="logo horizon"
            className="object-cover"
          />
          <img
                src={cpf}
                alt="Logo CPF"
                width={140}
                className='object-cover'
              />
          <img
                src={qualio}
                alt="Logo Qualiopi"
                width={280}
                className='object-cover'
              />

 
          </div>
          
          {/* Links */}
          <div className="flex flex-col-reverse xl:flex-row-reverse xl:w-full items-center gap-4 xl:gap-6 justify-between">
          <div>
            <h2 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-2 flex items-center gap-2 font-serif">
              Informations Légales
            </h2>
            <div className="space-y-1">
              <Link to="/mentions">
                <p className="text-xs hover:text-blue-500 transition-colors">Mentions Légales</p>
              </Link>
              <Link to="/politique-de-confidentialite">
                <p className="text-xs hover:text-blue-500 transition-colors">Politique de confidentialité et des cookies</p>
              </Link>
              <Link to="/conditions">
                <p className="text-xs hover:text-blue-500 transition-colors">Conditions Générales de vente</p>
              </Link>
              <Programme/>
              <Taxi/>
              <Certificat/>
            </div>
          </div>
          {/* Social Handle */}
          <div className="py-4 px-2 flex flex-col items-center sm:items-start">
            <h2 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-2 flex items-center gap-2 font-serif">
              Horizon Transports
            </h2>
            <p className="text-xs">
              Société de transports, service et formation.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <FaLocationArrow className="text-sm" />
              <p className="font-extralight text-xs">59 Rue Desseaux, 76100 Rouen</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaMobileAlt className="text-sm" />
              <div className="flex flex-col">
                <a href="tel:+33 7 69 98 98 85" className="text-xs hover:text-blue-500 transition-colors">+33 7 69 98 98 85</a>
                <a href="tel:+33 1 83 53 96 31" className="text-xs hover:text-blue-500 transition-colors">+33 1 83 53 96 31</a>
              </div>
            </div>
            <div className="flex mt-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-thin">Agrément VTC : n° 76-24-03</span>
                <span className="text-xs font-thin">Agrément Taxi : n° 76-24-02</span>
              </div>
            </div>
           
          </div>
          </div>
          {/* <div className="footer">
        <h1>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>{" "}
        </h1>
      
       <img
                src={cpf}
                alt="Logo CPF"
                width={100}
                height={100}
                className='cursor-pointer'
              />
              </div>*/}

               {/* logo organisme */}
            
        </div>
        
      </section>
    </div>
  );
};

export default Footer;
