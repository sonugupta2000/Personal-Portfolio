import"./pricingCardStyle.css";
import React from 'react';
import { Link } from "react-router-dom";

const pricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3> Desktop Voice Assistant </h3>
                <span className="bar"></span>
                <p className="btc">Speak</p>
                <p>Task Automation </p>
                <p>User-Friendly</p>
                <p>Responsive Design</p>
                <Link to="/Contact" className="btn">MORE ABOUT ME
                </Link>
            </div>
            <div className="card">
                <h3> Agriculture irrigation System</h3>
                <span className="bar"></span>
                <p className="btc">Automation</p>
                <p> Efficiency </p>
                <p>Monitoing</p>
                <p>Responsive Design</p>
                <Link to="/Contact" className="btn">MORE ABOUT ME
                </Link>
            </div>
            <div className="card">
                <h3>IOT based Smart Wheelchair </h3>
                <span className="bar"></span>
                <p className="btc">Safety</p>
                <p> Connectivity </p>
                <p>Control</p>
                <p>Responsive Design</p>
                <Link to="/Contact" className="btn">MORE ABOUT ME
                </Link>
            </div>

        </div>
    </div>
  );
};

export default pricingCard;