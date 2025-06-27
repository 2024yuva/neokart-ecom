import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🛒 Neokart</div>
      <input type="text" placeholder="Search for products..." className="search-bar" />
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#products">Products</a>
        <a href="#cart">Cart</a>
        <a href="#profile">Profile</a>
      </nav>
    </header>
  );
}

