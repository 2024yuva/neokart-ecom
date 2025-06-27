import React, { useState } from 'react';

const dryFruits = [
  { name: 'Almonds', price: '₹500 / 500g', img: '/images/almond.jpg', discount: '13%', originalPrice: '₹400.00', isNew: true },
  { name: 'Cashews', price: '₹550 / 500g', img: '/images/cashews.jpg' },
  { name: 'Raisins', price: '₹250 / 500g', img: '/images/raisins.jpeg' },
  { name: 'Walnuts', price: '₹600 / 500g', img: '/images/walnuts.jpg' },
];

const fruits = [
  { name: 'Strawberries', price: '₹120.00', img: '/images/strawberries.jpg', discount: '20%', originalPrice: '₹150.00' },
  { name: 'Oranges', price: '₹80 / kg', img: '/images/oranges.jpg' },
  { name: 'Grapes', price: '₹100 / kg', img: '/images/grapes.jpg' },
  { name: 'Mangoes', price: '₹150 / kg', img: '/images/mangoes.jpg' },
  { name: 'Apples', price: '₹180 / kg', img: '/images/apple.jpg' },
  { name: 'Bananas', price: '₹50 / dozen', img: '/images/banana.jpg' },
];

const vegetables = [
  { name: 'Carrots', price: '₹60 / kg', img: '/images/carrots.jpg' },
  { name: 'Potatoes', price: '₹30 / kg', img: '/images/potatoes.jpg' },
  { name: 'Tomatoes', price: '₹40 / kg', img: '/images/tomatoes.jpg' },
  { name: 'Onions', price: '₹50 / kg', img: '/images/onions.jpg' },
  { name: 'Spinach', price: '₹30 / bunch', img: '/images/spinach.jpg' },
];

const electronics = [
  { name: 'Usb cable', price: '₹80', img: '/images/usbcable.jpg' },
  { name: 'Prestige Grinder', price: '₹20,000', img: '/images/grinder.jpg' },
];

function ProductSection({ title, items, likes, toggleLike, offset }) {
  return (
    <section className="products">
      <h2>{title}</h2>
      <div className="scroll-container">
        {items.map((product, index) => (
          <div className="product-card" key={index + offset}>
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
              <span className="price">{product.price}</span>{' '}
              {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
            </p>
            <div className="stars">⭐⭐⭐⭐☆</div>
            <button className="add-btn">🛒 Add</button>
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