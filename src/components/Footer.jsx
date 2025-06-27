import React from 'react';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand">
          <h2>🛒 Neokart</h2>
          <p>
            Neokart offers fresh, premium quality products direct from farms to your
            doorstep. Experience the best in organic vegetables, fruits and more.
          </p>
          <div className="social-icons">
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
            <a href="#">▶️</a>
          </div>
        </div>

        <div className="footer-col links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h3>Contact Info</h3>
          <p>📍 Eluru, Vijayawada, Andhra Pradesh</p>
          <p>📞 +91 6305261146</p>
          <p>📧 neoshaantechnologies@gmail.com</p>
          <p>🕒 Mon-Sat: 9:00 AM - 9:00 PM</p>
        </div>

        <div className="footer-col newsletter">
          <h3>Subscribe</h3>
          <p>Subscribe to our newsletter for the latest products, offers and updates.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
          <div className="footer-highlights">
            <span>✅ Secure Payment</span>
            <span>🚚 Fast Delivery</span>
            <span>🎯 Quality Guarantee</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Neokart. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Shipping Policy</a>
        </div>
      </div>
    </footer>
  );
}
