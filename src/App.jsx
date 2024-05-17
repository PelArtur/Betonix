import Header from './Header.jsx'
import Company from './mainPage/Company.jsx'
import CallMeForm from './mainPage/CallMeForm.jsx';
import PriceTable from './mainPage/PriceTable.jsx';
import PriceCalculator from './mainPage/PriceCalculator.jsx';
import Footer from './mainPage/Footer.jsx';
import BetonixMap from './mainPage/BetonixMap.jsx';
import fetchPricesSelect from './mainPage/FilesFetching.js'

import React, {useEffect, useState} from 'react';

function App()
{
    const [prices, setPrices] = useState(null);
    let [pricesSelect, setPricesSelect] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/merchandise")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setPrices(data);
            setPricesSelect(fetchPricesSelect(data))
        })
    }, []);

    return(
        <>
            <Header/>
            <Company/>
            <CallMeForm/>
            <PriceTable/>
            {pricesSelect && <PriceCalculator data = {pricesSelect}/>}
            <BetonixMap/>
            <Footer/>
        </>
    );
}

export default App
