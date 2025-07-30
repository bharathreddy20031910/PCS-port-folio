import React from 'react';
import './OurHistory.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OurHistory = () => {
  return (
    <div className="our-history-page">
      {/* 1. Banner Carousel */}
      <section className="banner-carousel">
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3000 }} pagination={{ clickable: true }}>
          {[1, 2, 3].map((n) => (
            <SwiperSlide key={n}>
              <img src={`https://pin.it/uOHyRtRwh+${n}`} alt={`Banner ${n}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 2. Idea by CEO */}
      <section className="ceo-message">
        <div className="ceo-container">
          <img src="https://via.placeholder.com/400x400" alt="CEO" />
          <div className="ceo-content">
            <h2>Vision from Our Founder</h2>
            <p className="ceo-subtitle">“Innovation is not just about technology, it's about making lives better.”</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur vehicula nisl, nec consequat erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          </div>
        </div>
      </section>

      {/* 3. Office Gallery Carousel */}
      <section className="gallery-carousel">
        <h2>Our Journey in Pictures</h2>
        <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }} spaceBetween={20} slidesPerView={3} loop>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <SwiperSlide key={n}>
              <img src={`https://via.placeholder.com/300x200?text=Office+${n}`} alt={`Office ${n}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 4. Timeline Section */}
      <section className="company-timeline">
        <h2>Milestones Through the Years</h2>
        <div className="timeline-items">
          {[2017, 2018, 2019, 2021, 2024].map((year, index) => (
            <div className="timeline-box" key={index}>
              <h3>{year}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus tortor at justo facilisis aliquet.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="mission-vision">
        <div className="mv-box">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>
        </div>
        <div className="mv-box">
          <h2>Our Vision</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>
        </div>
      </section>

      {/* 6. Leadership Quotes */}
      <section className="leadership-quotes">
        <h2>Words from Our Leaders</h2>
        <div className="quote-box">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          <span>- Jane Doe, CTO</span>
        </div>
        <div className="quote-box">
          <p>“Praesent commodo cursus magna, vel scelerisque nisl consectetur et.”</p>
          <span>- John Smith, COO</span>
        </div>
      </section>

      {/* 7. Global Reach / Stats */}
      <section className="global-reach">
        <h2>Our Global Presence</h2>
        <div className="stats-container">
          <div className="stat-box"><h3>12+</h3><p>Years in Business</p></div>
          <div className="stat-box"><h3>25+</h3><p>Countries Served</p></div>
          <div className="stat-box"><h3>100+</h3><p>Corporate Clients</p></div>
          <div className="stat-box"><h3>500+</h3><p>Projects Delivered</p></div>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;
