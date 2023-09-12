import React, { useState, useEffect } from 'react';
import './LocationList.css';
import LocationCard from '../LocationCard/LocationCard';
import SearchBar from '../Search/Search';
import Pagination from '../Pagination/Pagination';

const LocationList = () => {
    // location
    const [locations, setLocations] = useState([]);
    
    // search
    const [selectCity, setSelectCity] = useState('');
    const [selectCountry, setSelectCountry] = useState('');
    const [selectAddress, setSelectAddress] = useState('');
    const [search, setSearch] = useState('');
    const filterLocations = (location) => {
        const searchString = `${location.city} ${location.name} ${location.country} ${location.address}`.toLowerCase();
        const searchTerms = [selectCity, selectCountry, selectAddress, search].filter(Boolean).map(term => term.toLowerCase());
        return searchTerms.every(term => searchString.includes(term));
    };
    const filteredLocations = locations.filter(filterLocations);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const pageCount = Math.ceil(filteredLocations.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const locationsToDisplay = filteredLocations.slice(startIndex, endIndex);

     // Unique values for city, country, and address
    const uniqueCities = [...new Set(locations.map(location => location.city))].map((name, id) => ({ name, id: id.toString() }));
    const uniqueCountries = [...new Set(locations.map(location => location.country))].map((name, id) => ({ name, id: id.toString() }));
    const uniqueAddresses = [...new Set(locations.map(location => location.address))].map((name, id) => ({ name, id: id.toString() }));

    useEffect(() => {
        fetch('https://64f9c54d4098a7f2fc14f616.mockapi.io/Locations')
            .then(response => {return response.json()})
            .then(data => {{ setLocations(data) }})
        
    })

    return (
        <div>
            <SearchBar
                search={search}
                setSearch={(data) => setSearch(data)}
                selectCity={selectCity}
                setSelectCity={(data) => setSelectCity(data)}
                selectCountry={selectCountry}
                setSelectCountry={(data) => setSelectCountry(data)}
                selectAddress={selectAddress}
                setSelectAddress={(data) => setSelectAddress(data)}
                
                cities={uniqueCities}
                countries={uniqueCountries}
                addresses={uniqueAddresses}
            />
            <h2>all events ({locations.length})</h2>
            <div className="location-list">
                {locationsToDisplay.length === 0 ? (
                    <p>No Locations found</p>
                ) : (
                    locationsToDisplay.map((location, index) => (
                        <LocationCard key={index} location={location} />
                    ))
                )}
            </div>
            <Pagination setCurrentPage={(data) => setCurrentPage(data)} pageCount={pageCount} />
        </div>
    );
};

export default LocationList;

