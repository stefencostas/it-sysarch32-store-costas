import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import ProductScreen from './components/productScreen';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/product/:id" element={<ProductScreen onAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer cartItems={cartItems} />
    </div>
  );
}

export default App;