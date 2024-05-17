import Header from './Header.jsx'
import Company from './Company.jsx'
import CallMeForm from './mainPage/CallMeForm.jsx';
import PriceTable from './mainPage/PriceTable.jsx';
import PriceCalculator from './mainPage/PriceCalculator.jsx';
import Footer from './mainPage/Footer.jsx';
import BetonixMap from './mainPage/BetonixMap.jsx';
import fetchPricesSelect from './FilesFetching.js'
import MapForm from './mainPage/MapForm.jsx';

import ExtraFooter from './ExtraPagesFooter.jsx';
import ConcreteTopic from './concretePage/ConcreteTopic.jsx';

import SandTopic from './sandPage/sandTopic.jsx';
import CrushedStoneTopic from './crushedStone/CrushedStoneTopic.jsx';

import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Router>
            <div className='App'>
                <Header/>
                <Company/>
                <div className='content'>
                    <Switch>
                        <Route exact path='/'>
                            <CallMeForm/>
                            <PriceTable/>
                            {pricesSelect && <PriceCalculator data = {pricesSelect}/>}
                            <section className='map-section'>
                                <BetonixMap/>
                                <MapForm/>
                            </section>
                            <Footer/>
                        </Route>
                        <Route path='/concrete'>
                            <ConcreteTopic/>
                            <ExtraFooter/>
                        </Route>
                        <Route path='/sand'>
                            <SandTopic/>
                            <ExtraFooter/>
                        </Route>
                        <Route path='/crushedstone'>
                            <CrushedStoneTopic/>
                            <ExtraFooter/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App
