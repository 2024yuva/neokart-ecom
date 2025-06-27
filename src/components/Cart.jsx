import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2>🛒 Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.name} width="60" />
            <span>{item.name} - ₹{item.price}</span>
            <button onClick={() => removeFromCart(index)}>❌</button>
          </div>
        ))
      )}
    </div>
  );
}