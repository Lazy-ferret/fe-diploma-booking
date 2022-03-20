import React, { useEffect, useState } from 'react';
import { requestLastRoutes } from '../../lib/api';
import './LastRoutes.css';
import LastRoutesItem from './LastRoutesItem';


export default function LastRoutes(props) {
    const [lastRoutes, setLastRoutes] = useState([]);

    useEffect(() => {
        requestLastRoutes()
            .then(resp => setLastRoutes(resp))
    }, []);

    const onClick = () => {
        console.log(lastRoutes)
    }

    return (

        <section className="Details-LastTickets">
            <h3 className="LastTickets-Title" onClick={onClick}>Последние билеты</h3>
            <ul className="LastTickets-List">
                {
                    lastRoutes && lastRoutes.slice(0, 3).map((route, _id) => {
                        return <LastRoutesItem route={route} key={_id} />
                    })
                }


            </ul>
        </section>

    )
}
