import React, { useState, useEffect } from 'react';
import './LocationList.css';
import LocationCard from '../LocationCard/LocationCard';
import SearchBar from '../Search/Search';
import Pagination from '../Pagination/Pagination';

const locations = [
    {
        name: "Location 1",
        city: "West Xzavier",
        country: "Sao Tome and Principe",
        address: "Fu fu ka",
    },
    {
        name: "Location 2",
        city: "South Joy",
        country: "Eritrea",
        address: "Kokodjambo",
    },
    {
        name: "Location 22222",
        city: "South Joy",
        country: "Eritrea",
        address: "Kokodjambo",
    },
    {
        name: "Location 3",
        city: "Northville",
        country: "Canada",
        address: "Kokodjambo",
    },
    {
        name: "Location 4",
        city: "Eastwood",
        country: "Australia",
        address: "456 Elm Street",
    },
    {
        name: "Location 5",
        city: "Central City",
        country: "United States",
        address: "789 Oak Street",
    },
    {
        name: "Location 6",
        city: "West End",
        country: "United Kingdom",
        address: "101 Maple Street",
    },
    {
        name: "Location 7",
        city: "Southside",
        country: "New Zealand",
        address: "202 Pine Street",
    },
    {
        name: "Location 8",
        city: "Downtown",
        country: "Germany",
        address: "303 Cedar Street",
    }
];

const LocationList = () => {
    const [currentPage, setCurrentPage] = useState(1);
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
    const itemsPerPage = 4;
    const pageCount = Math.ceil(filteredLocations.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const locationsToDisplay = filteredLocations.slice(startIndex, endIndex);

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
                setSelectAddress={(data) => setSelectAddress(data)} />
            <h2>all events</h2>
            <div className="location-list">
                {locationsToDisplay.map((location, index) => (
                    <LocationCard key={index} location={location} />
                ))}
            </div>
            <Pagination setCurrentPage={(data) => setCurrentPage(data)} pageCount={pageCount} />
        </div>
    );
};

export default LocationList;

