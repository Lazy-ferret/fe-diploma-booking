import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AsideSection from '../AsideSection/AsideSection';
import RoutesResult from '../RoutesResult/RoutesResult';
import SeatsSelection from '../SeatsSelection/SeatsSelection';

import './OrderPage.css';


export default function OrderPage(props) {
    
    const { currentRoute } = useSelector(state => state.routes);       

    return (
        <main className="container main">

            <div className="Order-Container">
            <AsideSection /> 
                       
            {!currentRoute && <RoutesResult />} 

            {currentRoute && <SeatsSelection />} 
               
                
            </div>
        
        </main>
    )
}

