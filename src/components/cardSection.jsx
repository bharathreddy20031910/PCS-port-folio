import React from 'react';
import './cardSection.scss';

const pricingPlans = [
  {
    type: "Single",
    price: "03.00",
    websites: "1 Website",
    storage: "40 GB SSD Storage",
    highlight: false,
  },
  {
    type: "Premium",
    price: "06.00",
    websites: "100 Website",
    storage: "100 GB SSD Storage",
    highlight: true,
  },
  {
    type: "Business",
    price: "09.00",
    websites: "150 Website",
    storage: "180 GB SSD Storage",
    highlight: false,
  },
];

const CardSection = () => {
  return (
    <section className="card-section">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`card ${plan.highlight ? 'highlight' : ''}`}
        >
          <h3>{plan.type}</h3>
          <p className="subtitle">A great solution for beginners</p>
          <div className="price-box">
            <span className="price">${plan.price}</span>
            <span className="per-month">/mo</span>
          </div>
          <div className="offer">+3 month Free <span>SAVE 70%</span></div>

          <ul className="features">
            <li>✔ {plan.websites}</li>
            <li>✔ Standard Performance</li>
            <li>✔ {plan.storage}</li>
            <li>✔ Weekly Backups</li>
          </ul>

          <button className="see-features">See All Features ▼</button>
          <button className="buy-now">Buy Now</button>

          <p className="renew-note">$04.00/mo when you renew</p>
        </div>
      ))}
    </section>
  );
};

export default CardSection;
