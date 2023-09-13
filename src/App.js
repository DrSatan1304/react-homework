import logo from './logo.svg';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Popular from './components/Popular/Popular';
import LocationList from './components/LocationList/LocationList';
import './App.scss'
import React, { useState } from 'react';
import './App.css';

//Создаем контекст
export const Data = React.createContext('');


function App() {

  const [cont, setCont] = useState('');
  const [contCity, setContcity] = useState('');
  const [contCountry, setContcountry] = useState('');
  const [contAddress, setContaddress] = useState('');


  return (
    <div className="App">

      <Data.Provider value={{ cont, setCont, contCity, setContcity, contCountry, setContcountry, contAddress, setContaddress }}> {/* //Оборачиваем в переменную контеста все приложение */}

        <Header />
        {/* <Search /> */}
        {/* <Popular /> */}
        <LocationList />

      </Data.Provider>

    </div>
  );
}

export default App;
