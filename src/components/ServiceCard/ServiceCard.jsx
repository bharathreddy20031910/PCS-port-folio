// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import './ServiceCard.scss';

// const services = ['Web Hosting', 'VPS Hosting', 'Cloud Hosting', 'WordPress Hosting', 'Business Mail'];

// const cardData = {
//   'Web Hosting': [
//     {
//       title: 'Single',
//       price: '$03.00',
//       sub: 'Best for small sites',
//       features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
//       color: "blue"
//     },
//     {
//       title: 'Premium',
//       price: '$06.00',
//       sub: 'Better performance',
//       features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
//       theme: 'blue'
//     },
//     {
//       title: 'Business',
//       price: '$09.00',
//       sub: 'Best for small sites',
//       features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
//       color: "blue"
//     }
//   ],
//   'VPS Hosting': [
//     {
//       title: 'Single',
//       price: '$03.00',
//       sub: '+3 month Free',
//       features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
//       color: 'red'
//     },
//     {
//       title: 'Premium',
//       price: '$06.00',
//       sub: 'SAVE 70%',
//       features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
//       color: 'blue'
//     },
//     {
//       title: 'Business',
//       price: '$09.00',
//       sub: 'SAVE 70%',
//       features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
//       color: 'dark'
//     }
//   ],
//   'Cloud Hosting': [
//     {
//       title: 'Single',
//       price: '$03.00',
//       sub: '+3 month Free',
//       features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
//       color: 'red'
//     },
//     {
//       title: 'Premium',
//       price: '$06.00',
//       sub: 'SAVE 70%',
//       features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
//       color: 'blue'
//     },
//     {
//       title: 'Business',
//       price: '$09.00',
//       sub: 'SAVE 70%',
//       features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
//       color: 'dark'
//     }
//   ],
//   'WordPress Hosting': [
//     {
//       title: 'Single',
//       price: '$03.00',
//       sub: '+3 month Free',
//       features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
//       color: 'red'
//     },
//     {
//       title: 'Premium',
//       price: '$06.00',
//       sub: 'SAVE 70%',
//       features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
//       color: 'blue'
//     },
//     {
//       title: 'Business',
//       price: '$09.00',
//       sub: 'SAVE 70%',
//       features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
//       color: 'dark'
//     }
//   ],
//   'Business Mail': [
//     {
//       title: 'Single',
//       price: '$03.00',
//       sub: '+3 month Free',
//       features: ['1 Website', 'Standard Performance', '50 GB SSD Storage', 'Weekly Backups'],
//       color: 'red'
//     },
//     {
//       title: 'Premium',
//       price: '$06.00',
//       sub: 'SAVE 70%',
//       features: ['150 Websites', 'Standard Performance', '100 GB SSD Storage', 'Weekly Backups'],
//       color: 'blue'
//     },
//     {
//       title: 'Business',
//       price: '$09.00',
//       sub: 'SAVE 70%',
//       features: ['500 Websites', 'Standard Performance', '200 GB SSD Storage', 'Weekly Backups'],
//       color: 'dark'
//     }
//   ],
// };

// const ServiceCard = () => {
//   const [selectedService, setSelectedService] = useState('Web Hosting');

//   return (
//     <div className="service-container">
//       <div className="centreele">
//       <nav className="service-nav">
//         {services.map(service => (
//           <div
//             key={service}
//             className={`nav-item ${selectedService === service ? 'active' : ''}`}
//             onClick={() => setSelectedService(service)}
//           >
//             {service}
//           </div>
//         ))}
//       </nav>
//       </div>

//       <div className="card-wrapper">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//         {cardData[selectedService]?.map((card, index) => (
//           <SwiperSlide key={index}>
//           <div className={`card ${card.color}`} key={index}>
//             <h3>{card.title}</h3>
//             <p className="subtitle">A great solution for beginners</p>
//             <div className="price-box">
//               <span className="price">
//                 {card.price}
//                 <span className="mo">/mo</span>
//               </span>
//               <span className="sub">{card.sub}</span>
//             </div>
//             <ul className="features">
//               {card.features.map((feature, idx) => (
//                 <li key={idx}>
//                   <span>✔</span> {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="buy-btn">Buy Now</button>
//           </div>
//           </SwiperSlide>
//         ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ServiceCard.scss";

const pricingData = {
  "Hosting": [
    {
      title: "Shared Hosting",
      price: "₹500",
      sub: "Best for small sites",
      features: ["1 Website", "20 GB SSD", "Standard Performance", "Weekly Backups"],
      theme: "dark",
    },
    {
      title: "VPS Hosting",
      price: "₹1000",
      sub: "Better performance",
      features: ["Unlimited Websites", "50 GB SSD", "Enhanced Performance", "Daily Backups"],
      theme: "blue",
    },
    {
      title: "Cloud Hosting",
      price: "₹1500",
      sub: "For businesses",
      features: ["Unlimited Websites", "Scalable Storage", "Max Performance", "Daily Backups"],
      theme: "dark",
    },
  ],
"Security": [
    {
      title: "SSL Certificate",
      price: "On-demand",
      features: [
        "1 SSL Integration",
        "Domain Validated SSL",
        "Extended Validated SSL",
        "Organisation Validated SSL",
      ],
      theme: "dark",
    },
    {
      title: "Web Security",
      price: "On-demand",
      features: [
        "Authentication",
        "Data Security",
        "Application Firewall",
        "Cloud DDoS Protection",
      ],
      theme: "blue",
    },
    {
      title: "Cloudflare Integration",
      price: "On-demand",
      features: [
        "Cost-effective",
        "Enhanced Security",
        "Improved Performance",
        "Content Delivery Network",
      ],
      theme: "dark",
    },
  ],
  "Web & Apps": [
    {
      title: "Website Development",
      price: "On-demand",
      features: [
        "Responsive Design",
        "Web Architecture",
        "API & Payment Integration",
        "Database Integration",
      ],
      theme: "dark",
    },
    {
      title: "Android App Development",
      price: "On-demand",
      features: [
        "Native Application",
        "Web Based Application",
        "eCommerce Application",
        "Social Media Application",
      ],
      theme: "blue",
    },
    {
      title: "IOS App Development",
      price: "On-demand",
      features: [
        "Native Application",
        "Web Based Application",
        "eCommerce Application",
        "Social Media Application",
      ],
      theme: "dark",
    },
  ],
  "Digital Marketing": [
    {
      title: "WP Basic",
      price: "$04.00",
      features: [
        "1 WordPress Site",
        "Auto Updates",
        "30 GB Storage",
        "Free Themes",
      ],
      theme: "dark",
    },
    {
      title: "WP Pro",
      price: "$08.00",
      features: [
        "10 WordPress Sites",
        "Advanced Cache",
        "100 GB Storage",
        "Premium Support",
      ],
      theme: "blue",
    },
    {
      title: "WP Business",
      price: "$12.00",
      features: [
        "Unlimited WordPress",
        "SEO Optimized",
        "200 GB Storage",
        "Expert Support",
      ],
      theme: "dark",
    },
  ],
  "IoT Solutions": [
    {
      title: "Mail Starter",
      price: "$01.00",
      features: [
        "5 GB Storage",
        "1 Email Address",
        "Webmail Access",
        "Spam Protection",
      ],
      theme: "dark",
    },
    {
      title: "Mail Pro",
      price: "$03.00",
      features: [
        "25 GB Storage",
        "10 Email Addresses",
        "Mobile Access",
        "Support Included",
      ],
      theme: "blue",
    },
    {
      title: "Mail Enterprise",
      price: "$06.00",
      features: [
        "100 GB Storage",
        "Unlimited Emails",
        "Outlook Sync",
        "Admin Panel",
      ],
      theme: "dark",
    },
  ],
  "Legal Services": [
    {
      title: "Mail Starter",
      price: "$01.00",
      features: [
        "5 GB Storage",
        "1 Email Address",
        "Webmail Access",
        "Spam Protection",
      ],
      theme: "dark",
    },
    {
      title: "Mail Pro",
      price: "$03.00",
      features: [
        "25 GB Storage",
        "10 Email Addresses",
        "Mobile Access",
        "Support Included",
      ],
      theme: "blue",
    },
    {
      title: "Mail Enterprise",
      price: "$06.00",
      features: [
        "100 GB Storage",
        "Unlimited Emails",
        "Outlook Sync",
        "Admin Panel",
      ],
      theme: "dark",
    },
  ],

};

const CardSection = () => {
  const [activeTab, setActiveTab] = useState("Hosting");

  return (
    <div className="card-section-wrapper">
      <div className="tab-bar">
        {Object.keys(pricingData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="card-section">
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
          {pricingData[activeTab].map((plan, idx) => (
            <SwiperSlide key={idx}>
              <div className={`card ${plan.theme || ""}`}>
                <div className="badge">{plan.title}</div>
                <h3>{plan.title}</h3>
                <div className="sub">{plan.sub}</div>
                <div className="price">{plan.price}<span>/mo</span></div>
                <div className="free">Free SSL & Email</div>
                <div className="top-feature">Top Features</div>
                <ul className="feature-list">
                  {plan.features.map((f, i) => (
                    <li key={i}><span className="dot">●</span>{f}</li>
                  ))}
                </ul>
                <div className="more">See more features</div>
                <button className="buy">Buy Now</button>
                <div className="renew">Renews at same price</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSection;