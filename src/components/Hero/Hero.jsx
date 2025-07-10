import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Hero.scss';

const Hero = () => {
  const slides = [
    'src/assets/firstban.jpg',
    'src/assets/secondban.jpg',
    'src/assets/thirdban.jpg',
  ];

  return (
    <section className="hero">
      <Swiper className="hero__slider" loop autoplay>
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero__slide"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="hero__overlay"></div>

              <div className="hero__content">
                <div className="hero__tag">Innovative IT Solutions</div>
                <h1 className="hero__title">
                  Empowering Digital Future, <br /> One solution at a time
                </h1>
                <p className="hero__subtitle">
                  Scalable IT services for modern businesses
                </p>
                <button className="hero__btn">Explore us</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
