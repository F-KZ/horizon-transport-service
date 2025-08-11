import { useState } from "react";
import {
  FaWhatsapp,
  FaLocationArrow,
  FaPhoneAlt,
  FaAt,
  FaMobileAlt,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import MyForm from "./Formulaire";

const Form = () => {
  return (
    <div className="py-12 bg-black">
      <span id="Info"></span>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Contactez-nous</h2>
          <p className="text-gray-400">Nous sommes à votre écoute pour répondre à toutes vos questions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulaire */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <MyForm />
          </div>

          {/* Informations de contact */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Téléphone</h3>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+33 7 69 98 98 85" className="text-gray-300 hover:text-blue-500 transition-colors">
                      +33 7 69 98 98 85
                    </a>
                    <a href="tel:+33 9 81 03 60 52" className="text-gray-300 hover:text-blue-500 transition-colors">
                      +33 9 81 03 60 52
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">WhatsApp</h3>
                  <a href="https://wa.me/33769989885" className="text-gray-300 hover:text-blue-500 transition-colors">
                    +33 7 69 98 98 85
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaFacebook className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Horizon Transport formation</h3>
                  <a href="https://www.facebook.com/profile.php?id=61579069833289" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
              
              { /*
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaLinkedin className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Horizon Transport formation</h3>
                  <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61579069833289" className="text-gray-300 hover:text-blue-500 transition-colors">
                    Linkedin
                  </a>
                </div>
              </div>
                   */}

              

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaAt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <a href="mailto:contact@horizontransports.fr" className="text-gray-300 hover:text-blue-500 transition-colors">
                    contact@horizontransports.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaLocationArrow className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Adresse</h3>
                  <p className="text-gray-300">
                    46 RUE LEON MALETRA<br />
                    76140 PETIT-QUEVILLY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;