import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products'; // Import product data from the products.js file

function ProductScreen({ onAddToCart }) {
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
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;