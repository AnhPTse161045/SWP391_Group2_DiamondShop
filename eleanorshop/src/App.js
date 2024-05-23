import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ShopPage from "./components/ShopPage";
import WeddingRingsPage from "./components/test/WeddingRingsPage";
import ProductDetailPage from "./components/ProductDetailPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import NavbarPage from "./components/test/NavbarPage";
import Register from "./components/Register";
import Product from "./components/Product";
import Hero from "./components/hero/Hero";
import { CartProvider } from './components/context/CartContext'; // Import CartProvider

function App() {
  return (
<<<<<<< HEAD
    <CartProvider>
      <Router>
        <div className="App">
          <NavbarPage />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/wedding-bands" element={<WeddingRingsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/register" element={<Register />} />
              <Route path="/hero" element={<Hero />} />
            </Routes>
          </div>
          <Footer />
=======
    <Router>
      <div className="App">
        <NavbarPage />
        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />  
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<Login />} />    
            <Route path="register" element={<Register/>} />
          </Routes>

>>>>>>> 668d6908143ed57314c6500c80ff576c4cbdae1b
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
