import React, { useState } from 'react';
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const navToggle = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    setIsActive(false);
  }

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">Book Store</a>
      <ul className={`nav__menu ${isActive ? 'nav_active' : ''}`}>
        <li className="nav__item"><a href="#" className="nav__link" onClick={handleClick}>Home</a></li>
        <li className="nav__item"><a href="#" className="nav__link" onClick={handleClick}>Books</a></li>
        <li className="nav__item"><a href="#" className="nav__link" onClick={handleClick}>Add Books</a></li>
      </ul>
      <div className="nav_toggler" onClick={navToggle}>{!isActive ? <GiHamburgerMenu /> : <GiCrossedBones />}</div>
    </nav>
  )
}

export default Navbar;
