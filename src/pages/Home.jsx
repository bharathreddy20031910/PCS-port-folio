import React from "react";
import Hero from "../components/Hero/Hero";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Counter from "../components/Counter/Counter";
import CustomerRev from "../components/CustomerRev/CustomerRev";
import Contact from "../components/Header/Contact";

const Home = () => {
  return (
    <div>
      <section id="home" className="section scroll-mt-28"><Hero /></section>
      <section id="services" className="section scroll-mt-28"><ServiceCard /></section>
      <section id="about" className="section scroll-mt-28"><Counter /></section>
      <section id="projects" className="section scroll-mt-28"><CustomerRev /></section>
      <section id="contact" className="section scroll-mt-28"><Contact /></section>
    </div>
  )
}

export default Home
