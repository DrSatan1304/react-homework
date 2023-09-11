import React, { useState } from 'react';
import Header_css from './Header.css';
import logo from './assets/logo.svg';
import 'font-awesome/css/font-awesome.min.css';
import Search from '../Search/Search';

const menu = ['Home', 'Venue', 'About', 'Contact us'];



const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <header>
      <div className="header-wrapper">
        <img src={logo} alt="logo" />
        <div className="right-content">
          <div className="buttons">
            <button>Login</button>
            <button>Signup</button>
          </div>
          <div className="menu">
            <ul>
              {
                menu.map((item, index) => {
                  return <li key={index}>{item}</li>
                })
              }
            </ul>
            <i className="fa fa-search search-icon" onClick={togglePopup}></i>
          </div>

        </div>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <button className="close-button" onClick={togglePopup}>
            <i className="fa fa-times"></i>
          </button>
          <Search />
        </div>
      )}

    </header>
  )
}

export default Header