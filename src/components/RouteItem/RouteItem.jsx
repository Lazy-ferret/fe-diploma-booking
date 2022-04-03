import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentRoute } from '../../actions/routes';
import { featuresList } from '../../lib/const';
import './RouteItem.css';

export default function RouteItem({ item }) {
    const dispatch = useDispatch();
    const { departure: { train,
        from,
        to,
        duration,
        available_seats_info,
        price_info,
        have_first_class,
        have_fourth_class,
        have_second_class,
        have_third_class,
        have_wifi,
        is_express
    }
    } = item;

    const onClick = (e) => {
        dispatch(setCurrentRoute(item));
    };

    return (
        <li className='Result-Routes-item'>
            <div className='Route-train-info'>
                <div className="Route-train-icon"></div>
                <div className="Route-train-number">{train._id}</div>
                <div className="Route-train-route">
                    <div className="route-starting-point">
                        <span>{from.city.name} →</span>
                    </div>
                    <div className="route-destination-point">
                        <span>{to.city.name}</span>
                    </div>
                    {train.name && <div className="train-firmName">
                        <span>«{train.name}»</span>
                    </div>}
                </div>
            </div>

            <div className='Route-time-info'>
                <div className='Route-time-container forward-direction'>
                    <div className='Route-time-wrapper departure-time'>
                        <span className="Route-time-time">{moment(from.datetime).format('hh:mm')}</span>
                        <span className="Route-time-city">{from.city.name}</span>
                        <span className="Route-time-station">{from.railway_station_name} вокзал</span>
                    </div>
                    <div className="route-duration_wrapper">
                        <span className="route-duration">{moment(duration).format('hh:mm')}</span>
                        <div className="route-direction-arrow arrow-right"></div>
                    </div>
                    <div className='Route-time-wrapper arrival-time'>
                        <span className="Route-time-time">{moment(to.datetime).format('hh:mm')}</span>
                        <span className="Route-time-city">{to.city.name}</span>
                        <span className="Route-time-station">{to.railway_station_name} вокзал</span>
                    </div>
                </div>
                {/* не приходит  arrival, поэтому обратный билет в маршруте тоже реализован через departure*/}
                <div className='Route-time-container backward-direction'>
                    <div className='Route-time-wrapper departure-time'>
                        <span className="Route-time-time">{moment(from.datetime).format('hh:mm')}</span>
                        <span className="Route-time-city">{to.city.name}</span>
                        <span className="Route-time-station">{to.railway_station_name} вокзал</span>
                    </div>
                    <div className="route-duration_wrapper">
                        <span className="route-duration">{moment(duration).format('hh:mm')}</span>
                        <div className="route-direction-arrow arrow-left"></div>
                    </div>
                    <div className='Route-time-wrapper arrival-time'>
                        <span className="Route-time-time">{moment(to.datetime).format('hh:mm')}</span>
                        <span className="Route-time-city">{from.city.name}</span>
                        <span className="Route-time-station">{to.railway_station_name} вокзал</span>
                    </div>
                </div>
            </div>

            <div className='Route-price-info'>
                <ul className='Route-price-classes_list'>
                    {have_fourth_class && <li className='Route-price-class'>
                        <span className='class_name'>Сидячий</span>
                        <span className='available_seats'>{available_seats_info.fourth}</span>
                        <div className="Route-price">
                            от
                            <span className='Route-price_value'>{price_info.fourth.bottom_price}</span>
                            <span className='Route-price_rouble'> ₽</span>
                        </div>
                    </li>}

                    {have_third_class && <li className='Route-price-class'>
                        <span className='class_name'>Плацкарт</span>
                        <span className='available_seats'>{available_seats_info.third}</span>
                        <div className="Route-price">
                            от
                            <span className='Route-price_value'>{price_info.third.bottom_price}</span>
                            <span className='Route-price_rouble'> ₽</span>
                        </div>
                    </li>}

                    {have_second_class && <li className='Route-price-class'>
                        <span className='class_name'>Купе</span>
                        <span className='available_seats'>{available_seats_info.second}</span>
                        <div className="Route-price">
                            от
                            <span className='Route-price_value'>{price_info.second.bottom_price}</span>
                            <span className='Route-price_rouble'> ₽</span>
                        </div>
                    </li>}

                    {have_first_class && <li className='Route-price-class'>
                        <span className='class_name'>Люкс</span>
                        <span className='available_seats'>{available_seats_info.first}</span>
                        <div className="Route-price">
                            от
                            <span className='Route-price_value'>{price_info.first.bottom_price}</span>
                            <span className='Route-price_rouble'> ₽</span>
                        </div>
                    </li>}
                </ul>

                <div className="Route-ChooseSeats-wrapper">
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
                    <button className="Route-ChooseSeats-btn btn" onClick={onClick}>Выбрать места</button>
                </div>
            </div>
        </li>
    )
};
