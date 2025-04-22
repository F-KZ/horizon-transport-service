import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Form from "./components/Contact/Form"
import Formules from "./components/Prix/Formules";
import FormulesDetail from "./components/Prix/FormulesDetail";
import Politique from "./components/Footer/Politique";
import Conditions from "./components/Footer/Conditions";
import Mentions from "./components/Footer/Mentions";
import { BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Seo from "./components/Referencement/Seo";
import StripePayment from './components/Paiement/StripePayment';
import Success from './components/Paiement/Success';
import Cancel from './components/Paiement/Cancel';
import ADokent from './components/Partenaire/ADokent';
import ScrollToTop from './components/ScrollToTop';
import CapacitéTransport from "./components/About/CapacitéTransport";
import CapacitéNeufPersonnes from "./components/About/CapacitéNeufPersonnes";
import Taxi from "./components/About/Taxi";
import Slider from './components/Slider/Slider';
// import Experience from "./components/Experience/Experience";

const App = () => {
  // Gestion du dark mode
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Initialisation AOS
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Seo />
      <div className="light:bg-white dark:bg-black dark:text-white light:text-black overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              <Hero theme={theme} />
              <Slider />
              <Services />
              <CarList />
              <Testimonial />
              <Formules />
              <Form />
              <ScrollToTop />
            </>
          } />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/politique-de-confidentialite" element={<Politique />} />
          <Route path="/paiement" element={<StripePayment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/adokent" element={<ADokent />} />
          <Route path="/formules" element={<FormulesDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App