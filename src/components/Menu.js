/* eslint-disable */
import React, { useState } from 'react'
import './Menu.css';

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
      <div className="menu-section">
        <img src="https://i.postimg.cc/hGtYVt6N/menubutton.png" alt="menu button" className="menubutton" onClick={toggleMenu} />
        {isMenuOpen && (
        <div className='expandedmenu'>
          <p>Home</p>
          <p>Objects</p>
          <p>Profile</p>
          <p>Search</p>
          <p>Log out</p>
        </div>
      )}
      </div>
    )
  }