import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Counter from "../components/Counter/Counter";
import CustomerRev from "../components/CustomerRev/CustomerRev";
import Contact from "../components/Header/Contact";
import Footer from "../components/Footer/Footer";

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
