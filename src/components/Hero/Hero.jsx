import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Hero.scss";

import firstban from "./firstban.png";
import secondban from "./secondban.jpg";
import thirdban from "./thirdban.jpg";

const slides = [{ img: firstban }, { img: secondban }, { img: thirdban }];

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
    <section className="hero-section">
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
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 my-6 sm:my-8 md:my-10 flex flex-col gap-3 sm:gap-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl w-full">
                  <p className="tagline text-xs sm:text-sm">Business Solutions & IT Services</p>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    Smart Solutions. Secure Systems. Scalable Success.
                  </div>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
                    Upscale your Business, with secured personalized digital and
                    ironclad security in era of digital realm, protect your
                    business, and expand your domain, around the clock support,
                    all under one roof.
                  </p>
                  <button
                    className="cta-button w-full sm:w-auto max-w-xs"
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
