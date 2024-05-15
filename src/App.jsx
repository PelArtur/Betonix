import Header from './Header.jsx'
import Company from './Company.jsx'
import CallMeForm from './CallMeForm.jsx';
import PriceTable from './PriceTable.jsx';
import PriceCalculator from './PriceCalculator.jsx';
import Footer from './Footer.jsx';

import React, {useEffect, useState} from 'react';

function App()
{
    const [prices, setPrices] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/merchandise")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setPrices(data);
        })
    }), [];


    return(
        <>
            <Header/>
            <Company/>
            <CallMeForm/>
            <PriceTable/>
            {prices && <PriceCalculator prices = {prices}/>}
            <Footer/>
        </>
    );
}

export default App
