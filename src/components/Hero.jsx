import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/images/banner.jpg"
        alt="Neokart Sale Starts Now"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Freshness Delivered Fast</h1>
        <p>Get fresh fruits, veggies, and more — delivered in minutes!</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </section>
  );
}
