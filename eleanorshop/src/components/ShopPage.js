import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/ShopPage.css';

import ring from './assets/ring.jpg';
import weddingring from './assets/weddingring.jpg';
import necklace from './assets/necklace.jpg';
import diamond1 from './assets/diamond1.png';
import diamond2 from './assets/diamond2.png';
import diamond3 from './assets/diamond3.png';
import WeddingRingsPage from './test/WeddingRingsPage';
import Ring from './test/Ring';
import NecklacesPage from './test/NecklacesPage';
import BracelesPage from './test/BracelesPage';
import WomenJewelryPage from './test/WomenJewelryPage';
import MenJewelryPage from './test/MenJewelryPage';


const categories = [
  { name: 'Wedding Ring', img: weddingring, link: '/wedding-bands' },
  { name: 'Rings', img: ring, link: '/rings' },
  { name: 'Necklaces', img: necklace, link: '/necklaces' },
  { name: 'Bracelets', img: diamond3, link: '/bracelets' },
  { name: 'Men\'s Jewelry', img: diamond1, link: '/mens-jewelry' },
  { name: 'Women\'s Jewelry', img: diamond2, link: '/womens-jewelry' },
];

function CategoryImage({ img }) {
  const [isError, setIsError] = React.useState(false);

  const handleError = () => setIsError(true);

  if (isError) {
    return <div className="category-image error">Image failed to load</div>;
  }

  return (
    <div
      className="category-image"
      style={{ backgroundImage: `url(${img})` }}
      onError={handleError}
    ></div>
  );
}

export default function ShopPage() {
  return (
    

    <div className="shop-page">
      <header>
        <h1>Shop By Category</h1>



      </header>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="category-card">
            <CategoryImage img={category.img} />
            <div className="category-overlay">
              <p className="category-shop-text">SHOP</p>
              <p className="category-name">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div>
      <hr/>
        <WeddingRingsPage/>
        <hr/>
        <Ring/>
        <hr/>
        <NecklacesPage/>
        <hr/>
        <BracelesPage/>
        <hr/>
        <WomenJewelryPage/>
        <hr/>
        <MenJewelryPage/>
        <hr/>
      </div> 
    </div>
  );
}
