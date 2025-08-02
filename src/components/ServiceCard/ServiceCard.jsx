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
      title: "Advertising",
      price: "On-demand",
      features: [
        "Online Advertising",
        "Mobile Marketing",
        "Video Marketing",
        "Marketing Automation",
      ],
      theme: "dark",
    },
    {
      title: "Poster Design",
      price: "On-demand",
      features: [
        "Social Media Posters",
        "Business Posters",
        "Event Posters",
        "Promotional Posters",
      ],
      theme: "blue",
    },
    {
      title: "Social Media Marketing",
      price: "On-demand",
      features: [
        "User Engagement",
        "Content Creation",
        "Brand Awareness",
        "Analytics & Reporting",
      ],
      theme: "dark",
    },
  ],
  "IoT Solutions": [
    {
      title: "IoT Device Management",
      price: "$01.00",
      features: [
        "Device Monitoring",
        "Remote Control",
        "Firmware Updates",
        "Security Management",
      ],
      theme: "dark",
    },
    {
      title: "IoT Data Analytics",
      price: "$03.00",
      features: [
        "Predictive Maintenance",
        "Smart Alerts",
        "Improved Decision Making",
        "Enhanced Efficiency",
      ],
      theme: "blue",
    },
    {
      title: "IoT Application Development",
      price: "$06.00",
      features: [
        "",
        "Platform Integration",
        "Data Management",
        "Data Analytics",
        "Security Management"
      ],
      theme: "dark",
    },
  ],
  "Legal Services": [
    {
      title: "Proactive Legal Solutions",
      price: "$01.00",
      features: [
        "Risk Assessment",
        "Negotiation Support",
        "Proactive Compliance",
        "Advisory Services",
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