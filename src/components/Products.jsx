import React, { useState } from 'react';
import { useCart } from '../components/CartContext';

const dryFruits = [
  { id: 1, name: 'Almonds', price: 500, img: '/images/almond.jpg', discount: '13%', originalPrice: '₹400.00', isNew: true },
  { id: 2, name: 'Cashews', price: 550, img: '/images/cashews.jpg' },
  { id: 3, name: 'Raisins', price: 250, img: '/images/raisins.jpeg' },
  { id: 4, name: 'Walnuts', price: 600, img: '/images/walnuts.jpg' },
];

const fruits = [
  { id: 5, name: 'Strawberries', price: 120, img: '/images/strawberries.jpg', discount: '20%', originalPrice: '₹150.00' },
  { id: 6, name: 'Oranges', price: 80, img: '/images/oranges.jpg' },
  { id: 7, name: 'Grapes', price: 100, img: '/images/grapes.jpg' },
  { id: 8, name: 'Mangoes', price: 150, img: '/images/mangoes.jpg' },
  { id: 9, name: 'Apples', price: 180, img: '/images/apple.jpg' },
  { id: 10, name: 'Bananas', price: 50, img: '/images/banana.jpg' },
];

const vegetables = [
  { id: 11, name: 'Carrots', price: 60, img: '/images/carrots.jpg' },
  { id: 12, name: 'Potatoes', price: 30, img: '/images/potatoes.jpg' },
  { id: 13, name: 'Tomatoes', price: 40, img: '/images/tomatoes.jpg' },
  { id: 14, name: 'Onions', price: 50, img: '/images/onions.jpg' },
  { id: 15, name: 'Spinach', price: 30, img: '/images/spinach.jpg' },
];

const electronics = [
  { id: 16, name: 'Usb cable', price: 80, img: '/images/usbcable.jpg' },
  { id: 17, name: 'Prestige Grinder', price: 20000, img: '/images/grinder.jpg' },
];

function ProductSection({ title, items, likes, toggleLike, offset }) {
  const { addToCart } = useCart();

  return (
    <section className="products">
      <h2>{title}</h2>
      <div className="scroll-container">
        {items.map((product, index) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-wrapper">
              {product.discount && <div className="discount-tag">{product.discount} OFF</div>}
              {product.isNew && <div className="new-tag">NEW</div>}
              <img src={product.img} alt={product.name} />
              <button className="like-btn" onClick={() => toggleLike(index + offset)}>
                {likes[index + offset] ? '❤️' : '🤍'}
              </button>
            </div>
            <h3>{product.name}</h3>
            <p>
              <span className="price">₹{product.price}</span>{' '}
              {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
            </p>
            <div className="stars">⭐⭐⭐⭐☆</div>
            <button className="add-btn" onClick={() => addToCart(product)}>🛒 Add</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Products() {
  const allProducts = [...dryFruits, ...fruits, ...vegetables, ...electronics];
  const [likes, setLikes] = useState(Array(allProducts.length).fill(false));

  const toggleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  return (
    <div>
      <ProductSection title="Dry Fruits" items={dryFruits} likes={likes} toggleLike={toggleLike} offset={0} />
      <ProductSection title="Fruits" items={fruits} likes={likes} toggleLike={toggleLike} offset={dryFruits.length} />
      <ProductSection
        title="Vegetables"
        items={vegetables}
        likes={likes}
        toggleLike={toggleLike}
        offset={dryFruits.length + fruits.length}
      />
      <ProductSection
        title="Electronics"
        items={electronics}
        likes={likes}
        toggleLike={toggleLike}
        offset={dryFruits.length + fruits.length + vegetables.length}
      />
    </div>
  );
}