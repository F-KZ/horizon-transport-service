import React from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import borcel from "../../assets/logo.webp";
import qualio from "../../assets/qualio2.webp";
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
      <section className="container">
        <div className=" flex flex-row sm:justify-between justify-center flex-wrap py-5">
          {/* company Details */}
          <div className=" py-8 px-4 "> <img
            width={260}
            src={borcel}
            alt="logo horizon"
          /></div>
          
          {/* Links */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Informations Légales
            </h1>
            <Link to="/mentions">
            <p className="text-sm">
              Mentions Légales{" "}
            </p>
            </Link>
            <br />
            <Link to="/politique-de-confidentialite">
            <p className="text-sm" >
              Politique de confidentialité et des cookies
            </p>
            </Link>
            <br/>
            <Link to="/conditions">
            <p className="text-sm">
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
              <p>76140 Petit-Quevilly</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <a href="tel:+33 7 69 98 98 85">+33 7 69 98 98 85</a>
              <br/>
              <a href="tel:+33 9 81 03 60 52">+33 9 81 03 60 52</a>
            </div>
            <div className="flex mt-4">
              <img
                src={qualio}
                alt="Logo Qualiopi"
                width={200}
                height={200}
                className='cursor-pointer'
              />
              <div className="flex flex-col gap-3">
              <button // Separate button for PDF_VTC
                className="ml-4 px-4 py-2 bg-cyan-700 text-white font-bold rounded-lg"
              >
                Agrément VTC : n° 76-24-03
              </button>
              <button // Separate button for PDF_VTC
                className="ml-4 px-4 py-2 bg-cyan-700 text-white font-bold rounded-lg"
              >
                Agrément Taxi : n° 76-24-02
              </button>
              </div>
            </div>
          </div>
          {/* <div className="footer">
        <h1>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>{" "}
        </h1>
      </div>*/}
        </div>
      </section>
    </div>
  );
};

export default Footer;
