import React, { useState, useContext } from 'react';
import './Search.css';
import Select from '../Select/Select';
import { Data } from '../../App'


const SearchBar = ({ cities, countries, addresses }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const { cont, setCont } = useContext(Data)



    const handleSearchChange = (e) => {

        setCont(e.target.value);
    };

    return (
        <form className="search-bar">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={cont}
                    onChange={(e) => handleSearchChange(e)}
                    className="search-input"
                />
            </div>
            <div className="selectors">
                <Select props={cities} differ={'city'} />
                <Select props={countries} differ={'country'} />
                <Select props={addresses} differ={'address'} />
            </div>
        </form>
    );
};

export default SearchBar;
