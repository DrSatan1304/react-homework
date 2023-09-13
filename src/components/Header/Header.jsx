import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header_css from './Header.css';
import logo from './assets/logo.svg';
import 'font-awesome/css/font-awesome.min.css';
import LocationForm from '../LocationForm/LocationForm';
import { Data } from '../../App';
const menu = ['Home', 'Venue', 'About', 'Contact us'];

const Header = () => {

  const { formSubmitted, setFormSubmitted } = useContext(Data);
  const togglePopup = () => {
    setFormSubmitted(!formSubmitted);
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
              {menu.map((item, index) => {
                // Преобразуем название элемента в нижний регистр для ссылки
                const lowerCaseItem = item.toLowerCase();
                // Если элемент "Home", то путь будет "/"
                const path = lowerCaseItem === "home" ? "/" : `/${lowerCaseItem}`;
                return (
                  <li key={index}>
                    <Link to={path}>{item}</Link> {/* Используем Link для создания ссылки */}
                  </li>
                );
              })}
            </ul>
            <i className="fa fa-envelope search-icon" onClick={togglePopup}></i>
          </div>
        </div>
      </div>

      {formSubmitted && (
        <div className="popup">
          <button className="close-button" onClick={togglePopup}>
            <i className="fa fa-close"></i>
          </button>
          <LocationForm />
        </div>
      )}

    </header>
  )
}

export default Header