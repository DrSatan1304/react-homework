import React, { useState, useEffect, useContext } from 'react';
import style from './LocationForm.module.scss';
import { Data } from '../../App';

function LocationForm() {

    const {formSubmitted, setFormSubmitted} = useContext(Data)

    const initialFormData = {
        name: '',
        email: '',
        locationName: '',
        city: '',
        country: '',
        address: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    // Массив с именами полей
    const fields = ['name', 'email', 'locationName', 'city', 'country', 'address'];
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Создайте объект с данными из формы
        const newData = {
            name: formData.name,
            city: formData.city,
            country: formData.country,
            address: formData.address,
        };

        var json = Object.assign({}, newData);
        fetch('https://64f9c54d4098a7f2fc14f616.mockapi.io/Locations', {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        setFormSubmitted(false);

    };

    return (
        <div className={style.root}>
            <h2>Форма заявки локации</h2>
            <form onSubmit={handleSubmit} className='location-form'>
                {fields.map((field) => (
                    <div key={field}>
                        <label>{field === 'name' ? 'Имя' : field === 'email' ? 'Почта' : field}</label>
                        <input
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default LocationForm;
