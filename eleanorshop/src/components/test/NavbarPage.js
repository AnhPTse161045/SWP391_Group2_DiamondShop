import React, { Component } from "react";
import "../styles/NavBarPage.css";
import brand from "../assets/brandempty.png";
import { MDBIcon } from "mdb-react-ui-kit";
import video from "../assets/video/video.mp4";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <div className="video-container">
          <video src={video} type="video/mp4" autoPlay muted loop />
        </div>
        <header className="bg-black white-80 tc pv4 avenir header-content">
          <div className="brand-container">
            <img src={brand} alt="Brand Logo" className="brand-logo" />
          </div>
          <h1 className="mt2 mb0 baskerville i fw1 f1">Eleanor & Co</h1>
          <h2 className="mt2 mb0 f6 fw4 ttu tracked">Elegance in Every Detail</h2>
          <nav className="bt bb tc mw7 center mt4 nav-links">
            <a className="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">
              Home
            </a>

            {/* Shop dropdown */}
            <div className="dropdown">
              <a className="f6 f5-l link bg-animate white-80 hover-bg-light-green dib pa3 ph4-l dropbtn" href="/shop">
                Shop <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="/shop/category1">Category 1</a>
                <a href="/shop/category2">Category 2</a>
                <a href="/shop/category3">Category 3</a>
              </div>
            </div>

            <a className="f6 f5-l link bg-animate white-80 hover-bg-light-blue dib pa3 ph4-l" href="/knowledge">
              Knowledge
            </a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">
              About
            </a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">
              Contact
            </a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-light-yellow dib pa3 ph4-l" href="/cart">
              <MDBIcon icon="shopping-cart" className="white-icon" />
            </a>
            <a className="f6 f5-l link bg-animate white-80 hover-bg-light-yellow dib pa3 ph4-l" href="/search">
              <MDBIcon fas icon="search" className="white-icon" />
            </a>
          </nav>
        </header>
        <div className="main-content">{/* Your other content goes here */}</div>
      </div>
    );
  }
}

export default NavbarPage;
