import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AsideSection from '../AsideSection/AsideSection';
import PassengersSection from '../PassengersSection/PassengersSection';
import RoutesResult from '../RoutesResult/RoutesResult';
import SeatsSelection from '../SeatsSelection/SeatsSelection';

import './OrderPage.css';


export default function OrderPage(props) {
    const { orderStatus } = useSelector(state => state.order)
    const { currentRoute } = useSelector(state => state.routes);

    return (
        <main className="container main">

            <div className="Order-Container">
                <AsideSection />

                {(orderStatus === 1)
                    && !currentRoute
                    && <RoutesResult />}

                {(orderStatus === 1)
                    && currentRoute
                    && <SeatsSelection />}

                {(orderStatus === 2)
                    && <PassengersSection />}



            </div>

        </main>
    )
}

