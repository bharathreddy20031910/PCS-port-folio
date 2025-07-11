import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Counter from "../components/Counter/Counter";
import CustomerRev from "../components/CustomerRev/CustomerRev";
import FAQ from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceCard />
      <Counter />
      <CustomerRev />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
