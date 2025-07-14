import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './Hero.scss';

import firstban from './firstban.png';
import secondban from './secondban.jpg';
import thirdban from './thirdban.jpg';

const slides = [
  { img: secondban },
  { img: thirdban },
  { img: firstban },
];

const Hero = () => {
  const [setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);}
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
              <img src={slide.img} alt={`Slide ${index + 1}`} className="slide-bg" />
              <div className="slide-overlay"></div>

              <div className="slide-content">
                <p className="tagline">Business Solutions & IT Services</p>
                <h1 className="headline">
                  Smart Solutions. Secure Systems. Scalable Success.
                </h1>
                <p className="subtext">
                  Upscale your Business, with secured personalized digital and ironclad security in era of digital realm, protect your business, and expand your domain, around the clock support,  all under one roof. 
                </p>
                <button className="cta-button" onClick={() => scrollToSection('contact')}>Contact Us &raquo;</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
