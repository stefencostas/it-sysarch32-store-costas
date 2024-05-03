import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import ProductScreen from "./components/productScreen";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;