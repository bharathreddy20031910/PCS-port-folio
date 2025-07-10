import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './ServiceCard.scss';

const services = ['Web Hosting', 'VPS Hosting', 'Cloud Hosting', 'WordPress Hosting', 'Business Mail'];

const cardData = {
  'Web Hosting': [
    {
      title: 'Single',
      price: '$03.00',
      sub: 'Best for small sites',
      features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
      color: "blue"
    },
    {
      title: 'Premium',
      price: '$06.00',
      sub: 'Better performance',
      features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
      theme: 'blue'
    },
    {
      title: 'Business',
      price: '$09.00',
      sub: 'Best for small sites',
      features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
      color: "blue"
    }
  ],
  'VPS Hosting': [
    {
      title: 'Single',
      price: '$03.00',
      sub: '+3 month Free',
      features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
      color: 'red'
    },
    {
      title: 'Premium',
      price: '$06.00',
      sub: 'SAVE 70%',
      features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
      color: 'blue'
    },
    {
      title: 'Business',
      price: '$09.00',
      sub: 'SAVE 70%',
      features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
      color: 'dark'
    }
  ],
  'Cloud Hosting': [
    {
      title: 'Single',
      price: '$03.00',
      sub: '+3 month Free',
      features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
      color: 'red'
    },
    {
      title: 'Premium',
      price: '$06.00',
      sub: 'SAVE 70%',
      features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
      color: 'blue'
    },
    {
      title: 'Business',
      price: '$09.00',
      sub: 'SAVE 70%',
      features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
      color: 'dark'
    }
  ],
  'WordPress Hosting': [
    {
      title: 'Single',
      price: '$03.00',
      sub: '+3 month Free',
      features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
      color: 'red'
    },
    {
      title: 'Premium',
      price: '$06.00',
      sub: 'SAVE 70%',
      features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
      color: 'blue'
    },
    {
      title: 'Business',
      price: '$09.00',
      sub: 'SAVE 70%',
      features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
      color: 'dark'
    }
  ],
  'Business Mail': [
    {
      title: 'Single',
      price: '$03.00',
      sub: '+3 month Free',
      features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
      color: 'red'
    },
    {
      title: 'Premium',
      price: '$06.00',
      sub: 'SAVE 70%',
      features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
      color: 'blue'
    },
    {
      title: 'Business',
      price: '$09.00',
      sub: 'SAVE 70%',
      features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
      color: 'dark'
    }
  ],
};

const ServiceCard = () => {
  const [selectedService, setSelectedService] = useState('Web Hosting');

  return (
    <div className="service-container">
      <div className="centreele">
      <nav className="service-nav">
        {services.map(service => (
          <div
            key={service}
            className={`nav-item ${selectedService === service ? 'active' : ''}`}
            onClick={() => setSelectedService(service)}
          >
            {service}
          </div>
        ))}
      </nav>
      </div>

      <div className="card-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
        {cardData[selectedService]?.map((card, index) => (
          <SwiperSlide key={index}>
          <div className={`card ${card.color}`} key={index}>
            <h3>{card.title}</h3>
            <p className="subtitle">A great solution for beginners</p>
            <div className="price-box">
              <span className="price">
                {card.price}
                <span className="mo">/mo</span>
              </span>
              <span className="sub">{card.sub}</span>
            </div>
            <ul className="features">
              {card.features.map((feature, idx) => (
                <li key={idx}>
                  <span>✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className="buy-btn">Buy Now</button>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceCard;
