import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="back-to-home">
        Stefen Store
      </Link>
      <Link to="/add-to-cart" className="add-to-cart">
        Add to Cart
      </Link>
    </header>
  );
};

export default Header;
