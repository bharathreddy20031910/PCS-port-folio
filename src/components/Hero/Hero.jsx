import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Hero.scss";

import firstban from "./firstban.webp";
import secondImg from "./secondImg.webp";
import thirdImg from "./thirdImg.webp";

const slides = [ { img: firstban }, { img: secondImg }, { img: thirdImg }];

const Hero = () => {
  const [setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <section className="hero-section min-h-[70vh] md:h-[100vh] relative overflow-hidden">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="slide-bg"
              />
              <div className="slide-overlay"></div>

              <div className="slide-content">
                <div className="px-9 md:px-10  my-10 flex flex-col flex-wrap gap-3 max-w-xl ">
                  <p className="tagline">Business Solutions & IT Services</p>
                  <h1 className="text-2xl font-bold md:text-3xl lg:text-[2rem]">
                    Smart Solutions. Secure Systems. Scalable Success.
                  </h1>
                  <p className="text-[0.9rem] md:text-[0.95rem] md:my-2">
                    Upscale your Business, with secured personalized digital and
                    ironclad security in era of digital realm, protect your
                    business, and expand your domain, around the clock support,
                    all under one roof.
                  </p>
                  <button
                    className="cta-button w-[95%] md:w-[350px]"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Us &raquo;
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
