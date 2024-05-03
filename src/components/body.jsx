import React from 'react';
import landscapeImage from '../assets/landscape.jpg'; // Importing the landscape image
import product1Image from '../assets/product1.jpg'; // Importing product 1 image
import product2Image from '../assets/product2.jpg'; // Importing product 2 image

import { Link } from 'react-router-dom';

function Body() {
  return (
    <div className="body">
      <img className="landscape-image" src={landscapeImage} alt="Landscape Image" />
      <h2>Featured Products</h2>
      <div className="featured-products">
        <div className="product-item">
          <Link to="/product/1">
            <div className="product">
              <div className="product-info">
                <img className="product-image" src={product1Image} alt="Product 1 Image" />
                <h3 className="product-title">Mystbloom Phantom</h3>
                <p className="product-description">Rifle</p>
                <p className="product-price"><b>₱750.00</b></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="product-item">
          <Link to="/product/2">
            <div className="product">
              <div className="product-info">
                <img className="product-image" src={product2Image} alt="Product 2 Image" />
                <h3 className="product-title">Sakura Vandal</h3>
                <p className="product-description">Rifle</p>
                <p className="product-price"><b>₱550.00</b></p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;