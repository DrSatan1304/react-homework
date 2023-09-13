import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import './App.css';
import Home from './Pages/Home';
import Venue from './Pages/Venue';
import NotFound from './Pages/NotFound';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Popular from './components/Popular/Popular';
import LocationList from './components/LocationList/LocationList';

//Создаем контекст
export const Data = React.createContext('');

function App() {

  const [cont, setCont] = useState('');
  const [contCity, setContcity] = useState('');
  const [contCountry, setContcountry] = useState('');
  const [contAddress, setContaddress] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="App">
      <Data.Provider value={{ cont, setCont, contCity, setContcity, contCountry, setContcountry, contAddress, setContaddress, formSubmitted, setFormSubmitted }}> {/* //Оборачиваем в переменную контеста все приложение */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/venue' element={<Venue />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Data.Provider>
    </div>
  );
}

export default App;
