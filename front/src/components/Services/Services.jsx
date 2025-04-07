import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Formez-vous en toute liberté",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Rejoignez-nous sans plus attendre !",
    aosDelay: "0",
  },
  {
    name: "Nous sommes à votre écoute",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Un interlocuteur dédié à votre projet du début jusqu'à l'obtention de votre carte professionnelle.",
    aosDelay: "500",
  },
  {
    name: "Formateurs Agréés",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: `Nos formateurs sont des experts dans leurs domaines d'intervention, ils connaissent parfaitement le secteur et l’actualité des métiers enseignés. Bénéficiez de leurs expériences et conseils.`,
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="Services"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Pourquoi nous choisir
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      <span id="Requis"></span>
      </div>
    </>
  );
};

export default Services;
