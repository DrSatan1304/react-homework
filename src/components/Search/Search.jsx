import React, { useState } from 'react';
import './Search.css';
import Select from '../Select/Select';

const SearchBar = ({selectCity, setSelectCity, selectCountry, setSelectCountry, selectAddress, setSelectAddress, setSearch, cities, countries, addresses}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setSearch(e.target.value)
    };

    return (
        <form className="search-bar">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e)}
                    className="search-input"
                />
            </div>
            <div className="selectors">
                <Select props={cities} data={selectCity} setData={(data) => setSelectCity(data)} />
                <Select props={countries} data={selectCountry} setData={(data) => setSelectCountry(data)} />
                <Select props={addresses} data={selectAddress} setData={(data) => setSelectAddress(data)} />
            </div>
        </form>
    );
};

export default SearchBar;
