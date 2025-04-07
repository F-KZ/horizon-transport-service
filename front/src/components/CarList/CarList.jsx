import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import whiteCar from "../../assets/balanceColor.webp";
import car2 from "../../assets/exam.webp";
import car3 from "../../assets/permis.webp";

const carList = [
  {
    name: "Casier judiciaire vierge ",
    price: "Il faut avoir un casier judiciaire vierge au bulletin n°2",
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Permis depuis 3 ans",
    price: "il faut être titulaire d'un permis de conduire non probatoire, depuis 3 ans ou justifier de 2 ans de conduite accompagnée.",
    image: car3,
    aosDelay: "500",
  },
  {
    name: "Examen ",
    price: " Deux étapes : la réussite à la théorie vous donne accès à la pratique et la réussite à la pratique vous donne accès aux formalités de votre carte professionnelle.",
    image: car2,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-2xl font-semibold mb-3 text-center md:text-justify"
        >
          Chauffeur professionnel oui mais à quelles conditions ?
        </h1>
        <p data-aos="fade-up" aos-delay="400" className=" text-2xl  pb-10 flex flex-row items-center gap-2">
         
 <span className="font-semibold">Prérequis</span>: <FaAngleDoubleDown />
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt="photo de voiture"
                    className="w-full h-[120px] object-contain "
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold text-center">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p className="text-center">{data.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid place-items-center mt-8">
          <button data-aos="zoom-in"   className="button-outline">
          <a href="https://www.francecompetences.fr/recherche/rs/5637/" target="_blank" rel="noopener noreferrer">
          Habilitation pour l’accès à la profession de conducteur de voiture de transport avec chauffeur (VTC), Fiche : RS5637
          </a>
          </button>
          <br/>
          <button data-aos="zoom-in"  className="button-outline">
          <a href="https://www.francecompetences.fr/recherche/rs/5635//" target="_blank" rel="noopener noreferrer">
          Habilitation pour l’accès à la profession de conducteur de Taxi, Fiche : RS5635
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
