
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    
    <nav className="navbar">
      <div className="container">
        <div className="logo">
           <h1>EzShoppy</h1> <img  src="/cart.png" alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
         
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;