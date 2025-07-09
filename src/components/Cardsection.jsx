import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./cardSection.scss";

const pricingData = {
  "Web Hosting": [
    {
      title: "Single",
      price: "$03.00",
      sub: "Best for small sites",
      features: ["1 Website", "40 GB SSD", "Standard Performance", "Weekly Backups"],
      theme: "dark",
    },
    {
      title: "Premium",
      price: "$06.00",
      sub: "Better performance",
      features: ["10 Websites", "100 GB SSD", "Enhanced Performance", "Daily Backups"],
      theme: "blue",
    },
    {
      title: "Business",
      price: "$12.00",
      sub: "For businesses",
      features: ["Unlimited Websites", "200 GB SSD", "Max Performance", "Daily Backups"],
      theme: "dark",
    },
  ],
"VPS Hosting": [
    {
      title: "Starter VPS",
      price: "$10.00",
      features: [
        "1 Core CPU",
        "2 GB RAM",
        "50 GB SSD",
        "Full Root Access",
      ],
      theme: "dark",
    },
    {
      title: "Pro VPS",
      price: "$20.00",
      features: [
        "2 Core CPU",
        "4 GB RAM",
        "100 GB SSD",
        "Managed Support",
      ],
      theme: "blue",
    },
    {
      title: "Elite VPS",
      price: "$30.00",
      features: [
        "4 Core CPU",
        "8 GB RAM",
        "200 GB SSD",
        "Priority Support",
      ],
      theme: "dark",
    },
  ],
  "Cloud Hosting": [
    {
      title: "Cloud Lite",
      price: "$15.00",
      features: [
        "2 Website",
        "Cloud Performance",
        "50 GB SSD Storage",
        "Weekly Backups",
      ],
      theme: "dark",
    },
    {
      title: "Cloud Pro",
      price: "$25.00",
      features: [
        "10 Website",
        "Premium Performance",
        "100 GB SSD Storage",
        "Daily Backups",
      ],
      theme: "blue",
    },
    {
      title: "Cloud Elite",
      price: "$40.00",
      features: [
        "Unlimited Website",
        "Max Performance",
        "250 GB SSD Storage",
        "Realtime Backups",
      ],
      theme: "dark",
    },
  ],
  "WordPress Hosting": [
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
  "Business Mail": [
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
  const [activeTab, setActiveTab] = useState("Web Hosting");

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
