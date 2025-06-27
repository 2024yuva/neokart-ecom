import React from 'react';

const categories = [
  { name: 'Dry Fruits', img: 'https://spices100.com/wp-content/uploads/2020/05/dry-fruits-spices100.jpg' },
  { name: 'Fruits', img: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/32599/images/ec0547c-576-8207-beb8-fe808be00fb_img_22_fruits_1533625008.jpeg' },
  { name: 'Vegetables', img: 'https://assets.precisionnutrition.com/2008/07/vegetables.jpg' },
  { name: 'Electronics', img: 'https://ecelectronics.com/wp-content/uploads/2020/04/Modern-Electronics-EC-.jpg' }
];

export default function Categories() {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.name}>
            <img src={cat.img} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
