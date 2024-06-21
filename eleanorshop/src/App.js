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
import TestComponent from "./components/TestComponent";
import Ring from "./components/test/Ring";
import NecklacesPage from "./components/test/NecklacesPage";
import BracelesPage from "./components/test/BracelesPage";
import WomenJewelryPage from "./components/test/WomenJewelryPage";
import MenJewelryPage from "./components/test/MenJewelryPage";
import Template from "./components/Template";


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavbarPage />
         
            <Routes>
             
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/register" element={<Register />} />
              <Route path="/hero" element={<Hero />} />
              <Route path="/test" element={<TestComponent />} />


              <Route path="/template" element={<Template />} />
              <Route path="/wedding-bands" element={<WeddingRingsPage /> } />
              <Route path="/weddingringpage" element={<WeddingRingsPage /> } />
              <Route path="/ring" element={<Ring /> } />
              <Route path="/rings" element={<Ring /> } />
              <Route path="/necklaces" element={<NecklacesPage/> } />
              <Route path="/bracelets" element={<BracelesPage /> } />
              <Route path="/women-jewerly" element={<WomenJewelryPage /> } />
              <Route path="/men-jewelry" element={<MenJewelryPage /> } />
              <Route path="/womens-jewerly" element={<WomenJewelryPage /> } />
              <Route path="/mens-jewelry" element={<MenJewelryPage /> } />
            </Routes>
         
          <Footer />
          <Cart/>

      <TestComponent/>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
