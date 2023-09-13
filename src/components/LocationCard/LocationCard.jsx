import React from 'react';
import style from './LocationCard.module.scss'

const LocationCard = ({ location }) => {
    return (
        <div className={style.root}>
            <h2>{location.name}</h2>
            <p>City: {location.city}</p>
            <p>Country: {location.country}</p>
            <p>Address: {location.address}</p>
        </div>
    );
};

export default LocationCard;