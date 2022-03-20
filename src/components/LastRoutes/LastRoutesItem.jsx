import React from 'react'
import { featuresList } from '../../lib/const';

export default function LastRoutesItem({ route }) {

    const { departure: { from, to, have_wifi, is_express, have_first_class, have_second_class, _id }, min_price } = route;

    return (
        
            <li className="LastTickets-Item" key={_id}>
                <div className="LastTickets-Item-route" >
                    <div className='departure-station'>
                        <span className="route-city-name">{from.city.name}</span>
                        <span className="route-station-name">{from.railway_station_name} вокзал</span>
                    </div>
                    <div className='arrival-station'>
                        <span className="route-city-name">{to.city.name}</span>
                        <span className="route-station-name">{to.railway_station_name} вокзал</span>
                    </div>
                </div>

                <div className="LastTickets-Item-details">
                    <div className="details-icon_list">
                        {have_wifi &&
                            <div className="details_icon">
                                <img src={featuresList[0].src} alt={featuresList[0].alt} />
                            </div>}
                        {is_express &&
                            <div className="details_icon">
                                <img src={featuresList[1].src} alt={featuresList[1].alt} />
                            </div>
                        }
                        {(have_first_class || have_second_class) &&
                            <div className="details_icon">
                                <img src={featuresList[2].src} alt={featuresList[2].alt} />
                            </div>
                        }
                    </div>

                    <div className="LastTickets-Item-price">
                        от
                        <span className='Item-price_value'>{min_price}</span>
                        <span className='rouble'>₽</span>
                    </div>
                </div>
            </li>
        
    )
}
