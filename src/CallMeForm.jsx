import React, { useState } from 'react';
import axios from 'axios';
import consultantImage from './assets/call-me-img.jpg';

function CallMeForm() {
    const [phoneNumber, setPhoneNumber] = useState('+ 380 ');
    const [name, setName] = useState('');

    const PHONE_NUMBER_MAX_LENGTH = 12;

    const handlePhoneNumberChange = (event) => {
        const inputValue = event.target.value;
        const cleaned = inputValue.replace(/\D/g, '');
        if (cleaned.length <= PHONE_NUMBER_MAX_LENGTH) {
            const formattedValue = formatInputValue(cleaned);
            setPhoneNumber(formattedValue);
        }
    };

    const formatInputValue = (input) => {
        const cleaned = input.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,3})$/);
        if (match) {
            return ["+", match[1], match[2], match[3], match[4]].filter(Boolean).join(' ');
        }
        return input;
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            phoneNumber: phoneNumber.replace(/ /g, "").replace("+", ""),
            name: name
        };

        axios.post('http://localhost:5000/submit-form', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error saving the data!', error);
            });
    };

    return (
        <div className="call-me-form">
            <p className="call-me-front-text">Швидке замовлення</p>
            <div className="call-me-input-box">
                <h2 className="call-me-text">Ваш номер телефону</h2>
                <form className="rounded-box">
                    <input type="text" placeholder="+380  - - -  - - -  - - -" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </form>
                <h2 className="call-me-text">Ваше ім'я</h2>
                <form className="rounded-box">
                    <input type="text" placeholder="Ім'я" value={name} onChange={handleNameChange} />
                </form>
            </div>
            <img className="call-me-img" src={consultantImage} alt="Consultant" />
            <form onSubmit={handleSubmit}>
                <button type="submit" className="call-me-form-button">Подзвоніть мені</button>
            </form>
        </div>
    );
}

export default CallMeForm;
