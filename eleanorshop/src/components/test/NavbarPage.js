import React, { Component } from "react";
import "../styles/NavBarPage.css";
import brand from '../assets/brandempty.png';
import { MDBIcon } from "mdb-react-ui-kit";
//import videoplayback from './assets/videoplayback';
class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    
    return (
      
      <header   class="bg-black white-80 tc pv4 avenir " >
      
    
      <div className="brand-container">

          <img src={brand} alt="Brand Logo" className="brand-logo" />
        </div>
        <h1 class="mt2 mb0 baskerville i fw1 f1">Eleanor & Co</h1>
        <h2 class="mt2 mb0 f6 fw4 ttu tracked">Elegance in Every Detail</h2>
        <nav class="bt bb tc mw7 center mt4">
          <a
            class="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l"
            href="/"
          >
            Home
          </a>
          <a
            class="f6 f5-l link bg-animate white-80 hover-bg-light-green dib pa3 ph4-l"
            href="/shop"
          >
            Shop
          </a>
          <a
            class="f6 f5-l link bg-animate white-80 hover-bg-light-blue dib pa3 ph4-l"
            href="/knowledge"
          >
            Knowledge
          </a>

          <a
            class="f6 f5-l link bg-animate white-80 hover-bg-light-pink dib pa3 ph4-l"
            href="/about"
          >
            About
          </a>
          <a
            class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow dib pa3 ph4-l"
            href="/contact"
          >
            Contact
          </a>

          <a
            className="f6 f5-l link bg-animate white-80 hover-bg-light-yellow dib pa3 ph4-l"
            href="/cart"
          >
            <MDBIcon icon="shopping-cart" className="white-icon" /> {/* Cart icon */}
          </a>
        </nav>
      </header>
    );
  }
}

export default NavbarPage;
