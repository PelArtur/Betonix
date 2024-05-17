import React, { useState } from 'react';
import axios from 'axios';

function MapForm() {
    const [destination, setDestination] = useState('');
    const [distance, setDistance] = useState(null);
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`http://localhost:5000/distance?destination=${destination}`);
            const distanceValue = parseFloat(response.data.rows[0].elements[0].distance.value) / 1000;
            setDistance(distanceValue.toFixed(2));
            let calculatedPrice;

            if (distanceValue < 10) {
                calculatedPrice = '110  грн/км';
            } else if (distanceValue < 100) {
                calculatedPrice = '180 грн/км';
            } else if (distanceValue < 150) {
                calculatedPrice = '240 грн/км';
            } else {
                calculatedPrice = "Доставка лише по Львівській області";
            }

            setPrice(calculatedPrice);
            setError(null);
        } catch (error) {
            setError('Error fetching distance. Please try again later.');
            setDistance(null);
            setPrice(null);
        }
    };


    return (
        <div className="map-form">
            <p className="map-form-front-text">Дізнайтеся приблизну ціну</p>
            <div className="map-form-input-box">
                <h2 className="city-text-map-form">Ваше місто</h2>
                <form className="map-form-box" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Назва міста" value={destination} onChange={handleDestinationChange} />
                    <button type="submit" className="map-form-button">Дізнатись ціну</button>
                </form>
                {distance && <p className='map-form-price-text'>{price}</p>}
            </div>
        </div>
    );
}

export default MapForm;
