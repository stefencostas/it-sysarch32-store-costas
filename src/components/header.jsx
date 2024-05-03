// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="back-to-home">
        Stefen Store
      </Link>
    </header>
  );
};

export default Header;