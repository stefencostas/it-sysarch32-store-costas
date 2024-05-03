// ProductScreen.js
import React from 'react';
import product1Image from '../assets/product1.jpg';
import product2Image from '../assets/product2.jpg';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: product1Image,
    title: 'Mystbloom Phantom',
    description: 'Rifle',
    price: '₱750.00',
  },
  {
    id: 2,
    image: product2Image,
    title: 'Sakura Vandal',
    description: 'Rifle',
    price: '₱550.00',
  },
];

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="product-screen">
      {product && (
        <>
          <div className="product-screen-image-container">
            <img className="product-screen-image" src={product.image} alt={product.title} />
          </div>
          <div className="product-screen-info">
            <h3 className="product-screen-title">{product.title}</h3>
            <p className="product-screen-description">{product.description}</p>
            <p className="product-screen-price"><b>Price:</b> {product.price}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;