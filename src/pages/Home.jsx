import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import FAQ from "../components/Faq";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceCard />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Home
