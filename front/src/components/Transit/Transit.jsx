import carwebp from "../../assets/car.webp";
import yellowCar from "../../assets/banner-car.webp";
import faceCar from "../../assets/coupe.webp"
import AOS from "aos";
import { useEffect } from "react";

const Transit = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              TRANSIT MARITIME
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Horizon Transports 
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            Les objectifs de la formation chauffeur VTC sont d’acquérir les points clés d’une prestation réussie <span className="font-semibold">Horizon-Transports</span> est la pour vous assurer la réussite de votre objectif {" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
             je m'inscris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transit;
