import React from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import borcel from "../../assets/logo.webp";
import qualio from "../../assets/qualio2.webp";
import cpf from "../../assets/logo-cpf.png"
import Programme from "../programme/Programme";
import Taxi from "../programme/Taxi";



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
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className=" px-8">
        <div className=" flex flex-row items-center flex-wrap py-5 justify-around">
          <div className="flex flex-col xl:flex-row xl:w-full justify-between gap-8 ">
          {/* company Details */}
           <img
            width={260}
            src={borcel}
            alt="logo horizon"
            className="object-cover"
          />
          <img
                src={cpf}
                alt="Logo CPF"
                width={250}
                
                className='object-cover'
              />

<img
                src={qualio}
                alt="Logo Qualiopi"
                width={480}
                
                className='object-cover'
              />
 
          </div>
          
          {/* Links */}
          <div className="flex flex-col-reverse xl:flex-row-reverse xl:w-full items-center gap-8  justify-between">
          <div>
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Informations Légales
            </h1>
            <Link to="/mentions">
            <p className="text-sm hover:text-blue-500 transition-colors">
              Mentions Légales{" "}
            </p>
            </Link>
            <br />
            <Link to="/politique-de-confidentialite">
            <p className="text-sm hover:text-blue-500 transition-colors" >
              Politique de confidentialité et des cookies
            </p>
            </Link>
            <br/>
            <Link to="/conditions">
            <p className="text-sm hover:text-blue-500 transition-colors">
              Conditions Générales de vente
            </p>
            </Link>
            <br/>
            <Programme/>
            <br/>
            <Taxi/>
          </div>
          {/* Social Handle */}
          <div className=" py-8 px-4 flex flex-col items-center sm:items-start">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Horizon Transports
            </h1>
            <p className="text-sm">
              Société de transports, service et formation .{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p className="font-extralight text-sm">59 Rue Desseaux, 76100 Rouen</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <a href="tel:+33 7 69 98 98 85" className="text-sm hover:text-blue-500 transition-colors">+33 7 69 98 98 85</a>
              <br/>
              <a href="tel:+33 1 83 53 96 31" className="text-sm hover:text-blue-500 transition-colors">+33 1 83 53 96 31</a>
            </div>
            <div className="flex mt-4">
             
              <div className="flex flex-col gap-3">
              <button // Separate button for PDF_VTC
                className="ml-4 px-4 py-2 text-white font-thin text-sm rounded-lg"
              >
                Agrément VTC : n° 76-24-03
              </button>
              <button // Separate button for PDF_VTC
                className="ml-4 px-4 py-2  text-white font-thin text-sm rounded-lg"
              >
                Agrément Taxi : n° 76-24-02
              </button>
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
