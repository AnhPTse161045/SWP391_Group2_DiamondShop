import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Shop from "./components/Shop";

// import { Navbar,Container,} from "react-bootstrap";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import NavbarPage from "./components/test/NavbarPage";
import Register from "./components/Register";
function App() {
  return (
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

        </div>
        
        <Footer/>
       
      </div>
      
    </Router>
  );
}

export default App;
