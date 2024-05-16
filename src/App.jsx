import Header from './Header.jsx'
import Company from './Company.jsx'
import CallMeForm from './CallMeForm.jsx';
import PriceTable from './PriceTable.jsx';
import PriceCalculator from './PriceCalculator.jsx';
import Footer from './Footer.jsx';
import BetonixMap from './BetonixMap.jsx';

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
    }), [];

    function fetchPricesSelect(obj) 
    {
        const res = []

        for (const key in obj) 
        {
            if (typeof obj[key] === 'object') 
            {
                const types = [];
                for (const subKey in obj[key]) 
                {
                    if (typeof obj[key][subKey] === 'object' && typeof obj[key][subKey] !== Number) 
                    {
                        const types2 = []
                        for(const subKey2 in obj[key][subKey])    
                        {
                            types2.push({ label: subKey2, val: obj[key][subKey][subKey2] });
                        }

                        types.push({ label: subKey, types2: types2 })
                    } 
                    else 
                    {
                        types.push({ label: subKey, val: obj[key][subKey] });
                    }
                }
                res.push({ label: key, types: types });

            } 
            else 
            {
                res.push({ label: key, val: obj[key] });
            }
        }

        return res;
    }

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
