import React from 'react';
import './Pricing.css';
const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">The Right Plan for <span>Your Business</span></h1>
      <p className="pricing-description">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Nusquam quod in iure vero. Facilis magnam, sed officiis commodi labore odit.
      </p>
      <div className="pricing-plans">
        <div className="plan">
          <h2>Starter</h2>
          <ul>
            <li>✔ 1 lorem ipsum</li>
            <li>✔ Lorem, ipsum dolor.</li>
            <li>✔ Monthly Updates</li>
          </ul>
          <div className="plan-free">Free</div>
          <button className="get-started">Get Started</button>
        </div>
        <div className="plan">
          <h2>Lorem Plus</h2>
          <ul>
            <li>✔ 1 lorem ipsum</li>
            <li>✔ Lorem, ipsum dolor.</li>
            <li>✔ Monthly Updates</li>
          </ul>
          <div className="plan-price">$32.00</div>
          <button className="get-started">Get Started</button>
        </div>
        <div className="plan">
          <h2>Lorem Pro</h2>
          <ul>
            <li>✔ 1 lorem ipsum</li>
            <li>✔ Lorem, ipsum dolor.</li>
            <li>✔ Monthly Updates</li>
          </ul>
          <div className="plan-price">$50.00</div>
          <button className="get-started">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;