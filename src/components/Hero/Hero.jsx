import React from 'react';
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
                <p className="tagline">Fleet Management</p>
                <h1 className="headline">
                  Reliable, Fast, And Secure Logistics Solutions
                </h1>
                <p className="subtext">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button className="cta-button">Our Solutions &raquo;</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
