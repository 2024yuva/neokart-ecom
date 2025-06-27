import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}
