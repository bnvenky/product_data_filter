
import { Link } from 'react-router-dom';

import './index.css';


const Home = () => {

  return (
    <>
      
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Clothes That Make You Stand Out</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that make you stand out"
            className="home-mobile-img"
          />
          <p className="home-description">
          Fashion is part of everyday life and it's always changing. 
          Clothes reflect the times and we're in a fashion revolution. 
          What you wear makes a statement about who you are. So, embrace the new and exciting 
          trends each season in your own unique way.
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  );
}

export default Home;
