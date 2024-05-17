import Header from './Header.jsx'
import Company from './Company.jsx'
import CallMeForm from './CallMeForm.jsx';
import PriceTable from './PriceTable.jsx';
import PriceCalculator from './PriceCalculator.jsx';
import Footer from './Footer.jsx';
import BetonixMap from './BetonixMap.jsx';
import fetchPricesSelect from './FilesFetching.js'
import MapForm from './MapForm.jsx';

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
            <section className='map-section'>
                <BetonixMap/>
                <MapForm/>
            </section>
            <Footer/>
        </>
    );
}

export default App
