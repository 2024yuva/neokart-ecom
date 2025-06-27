import React from "react";
import { CartProvider } from "./components/CartContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart"; // newly added

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Hero />
        <Categories />
        <Products />
        <Cart /> {/* Display the cart below products or wherever suitable */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
