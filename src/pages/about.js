import React from "react";
import bgImg from "../assets/images/about-hero.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <div className="backgroundimage">
        <img
          src="https://www.beyondthetent.com/wp-content/uploads/2020/08/Van-Camping.jpg"
          className="about-hero-image"
        />
      </div>
      <div className="about-page-content">
        <h1>Ditch the Squeeze, Embrace the Breeze:</h1>
        <h1>Discover VanLife Splendor!</h1>
        <p>
          Embark on the Ultimate Road Trip Experience with our Enlivening Van
          Rentals. Each van is meticulously recertified before every journey,
          ensuring your plans unfold seamlessly, hitch-free
        </p>
        <p>
          At the heart of our team beats the passion of true VanLife
          enthusiasts. We've felt the enchantment of exploring the world on 4
          wheels, and now, we're thrilled to share that magic with you.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className="link-button" to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
