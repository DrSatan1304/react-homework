import React from 'react';

const LocationCard = ({ location }) => {
    return (
        <div className="location-card">
            <h2>{location.name}</h2>
            <p>City: {location.city}</p>
            <p>Country: {location.country}</p>
            <p>Address: {location.address}</p>
        </div>
    );
};

export default LocationCard;