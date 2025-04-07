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
import PaymentSuccess from './components/Paiement/PaymentSuccess';
import PaymentCancel from './components/Paiement/PaymentCancel';
import ADokent from './components/Partenaire/ADokent';
import ScrollToTop from './components/ScrollToTop';
// import Experience from "./components/Experience/Experience";

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
     localStorage.setItem("theme", "dark") 
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
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
    <Seo/>
    <BrowserRouter>
      <div className="light:bg-white dark:bg-black dark:text-white light:text-black overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme}  />} />
          <Route path="/conditions" element={<Conditions/>} />
          <Route path="/mentions" element={<Mentions/>} />
          <Route path="/politique-de-confidentialite" element={<Politique />} />
          <Route path="/paiement" element={<StripePayment />} />
          <Route path="/payment" element={<StripePayment />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="/adokent" element={<ADokent />} />
          <Route path="/formules" element={<FormulesDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
};

function Home({ theme, setTheme }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <Formules />
      <Form />
      <ScrollToTop />
    </>
  );
}




export default App;
