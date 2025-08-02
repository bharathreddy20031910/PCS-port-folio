import React, { useState } from "react";
import "swiper/css";
import "./cardSection.scss";

const pricingData = {
  "Web Hosting": [
    {
      title: "Single",
      price: "$03.00",
      features: [
        "1 Website",
        "Standard Performance",
        "40 GB SSD Storage",
        "Weekly Backups",
      ],
      theme: "dark",
    },
    {
      title: "Premium",
      price: "$06.00",
      features: [
        "100 Website",
        "Standard Performance",
        "100 GB SSD Storage",
        "Weekly Backups",
      ],
      theme: "blue",
    },
    {
      title: "Business",
      price: "$09.00",
      features: [
        "150 Website",
        "Standard Performance",
        "180 GB SSD Storage",
        "Weekly Backups",
      ],
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
  const tabs = Object.keys(pricingData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="card-section-wrapper">
      <div className="tab-bar">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="card-section">
        {pricingData[activeTab].map((plan, index) => (
          <div
            key={index}
            className={`card ${plan.theme === "blue" ? "blue" : "dark"}`}
          >
            <h3>{plan.title}</h3>
            <p className="sub">A great solution for beginners</p>
            <h2 className="price">
              {plan.price} <span>/mo</span>
            </h2>
            <p className="free">+3 month Free</p>
            <div className="badge">SAVE 70%</div>

            <h4 className="top-feature">Top Features</h4>
            <ul className="feature-list">
              {plan.features.map((item, idx) => (
                <li key={idx}>
                  <span className="dot">✔</span> {item}
                </li>
              ))}
            </ul>

            <p className="more">See All Features ▾</p>
            <button className="buy">Buy Now</button>
            <p className="renew">$04.00/mo when you renew</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;