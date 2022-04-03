import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './ConfirmationSection.css';
import { featuresList } from '../../lib/const';
import { setOrderStatus, setOrderSuccess } from '../../actions/order';
import { useNavigate } from 'react-router-dom';
import { setOrder } from '../../lib/api';

export default function ConfirmationSection(props) {
    const { departure, arrival } = useSelector(state => state.routes.currentRoute);
    const { passengers } = useSelector(state => state.order);
    const { userData } = useSelector(state => state.order.user);
    const { totalPrice } = useSelector(state => state.tickets);
    const { payment_method } = useSelector(state => state.order.user.userData);
    const { selectedSeats, currentCoach } = useSelector(state => state.tickets);

    const { train,
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
        is_express } = useSelector(state => state.routes.currentRoute.departure);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeTrainClick = () => {
        dispatch(setOrderStatus(1))
    };

    const onChangePassengerClick = () => {
        dispatch(setOrderStatus(2))
    };

    const onChangePaymentClick = () => {
        dispatch(setOrderStatus(3))
    };

    const getSeats = () => {
        const seatsArr = [];
        for (let i = 0; i < selectedSeats.length; i++) {
            const data = {
                coach_id: currentCoach.coach.coach._id,
                person_info: passengers[i],
                seat_number: selectedSeats[i],
                is_child: passengers[i].is_adult ? false : true,
                include_children_seat: false
            };
            seatsArr.push(data)
        };
        return seatsArr;
    };

    const onConfirmationClick = () => {
        setOrder(departure._id, getSeats(), userData);
        dispatch(setOrderStatus(0));
        dispatch(setOrderSuccess(true));
        navigate('/success');
    };

    return (
        <section className="Order-Result">
            <div className='Order-Payment-container Order-Confirmation-container'>
                <div className='Confirmation-Info '>
                    <div className='Confirmation-Info-fieldTitle Confirmation-Info_data'>
                        <div className='Info-title_value'>Поезд</div>
                    </div>
                    <div className='Confirmation-Info-Route'>
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
                                {train.name &&
                                    <div className="train-firmName">
                                        <span>«{train.name}»</span>
                                    </div>}
                            </div>
                        </div>

                        <div className='Route-time-info'>
                            {departure &&
                                <div className='Route-time-container forward-direction'>
                                    <div className='Route-time-wrapper departure-time'>
                                        <span className="Route-time-time">{moment(from.datetime).format('hh:mm')}</span>
                                        <span className="Route-time-city">{from.city.name}</span>
                                        <span className="Route-time-station">{from.railway_station_name} вокзал</span>
                                    </div>
                                    <div className="route-duration_wrapper">
                                        <span className="route-duration">{moment(duration).format('hh:mm')}</span>
                                        <div className="route-direction-arrow"></div>
                                    </div>
                                    <div className='Route-time-wrapper arrival-time'>
                                        <span className="Route-time-time">{moment(to.datetime).format('hh:mm')}</span>
                                        <span className="Route-time-city">{to.city.name}</span>
                                        <span className="Route-time-station">{to.railway_station_name} вокзал</span>
                                    </div>
                                </div>
                            }

                            {arrival &&
                                <div className='Route-time-container backward-direction'>
                                    <div className='Route-time-wrapper departure-time'>
                                        <span className="Route-time-time">{moment(arrival.from.datetime).format('hh:mm')}</span>
                                        <span className="Route-time-city">{arrival.from.city.name}</span>
                                        <span className="Route-time-station">{arrival.from.railway_station_name} вокзал</span>
                                    </div>
                                    <div className="route-duration_wrapper">
                                        <span className="route-duration">{moment(arrival.duration).format('hh:mm')}</span>
                                        <div className="route-direction-arrow"></div>
                                    </div>
                                    <div className='Route-time-wrapper arrival-time'>
                                        <span className="Route-time-time">{moment(arrival.to.datetime).format('hh:mm')}</span>
                                        <span className="Route-time-city">{arrival.to.city.name}</span>
                                        <span className="Route-time-station">{arrival.to.railway_station_name} вокзал</span>
                                    </div>
                                </div>}
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
                                <button
                                    className="Confirmation-Change-btn btn"
                                    onClick={onChangeTrainClick}
                                >
                                    Изменить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='Confirmation-Info '>
                    <div className='Confirmation-Info-fieldTitle Confirmation-Info_data'>
                        <div className='Info-title_value'>Пассажиры</div>
                    </div>
                    <div className='Confirmation-Info-Passengers'>
                        <div className='Passengers-list'>
                            {passengers && passengers.map((passenger) => {
                                return (<div className='Passengers-info' key={passenger.seat_number}>
                                    <div className='Passengers-info-icon'>
                                        <div className='passenger_icon'></div>
                                        <div className='passenger-ticketType'>{passenger.is_adult ? 'Взрослый' : 'Ребенок'}</div>
                                    </div>
                                    <div className='Passengers-info-personalData'>
                                        <div className='Passengers-personalData-fullName'>{`${passenger.last_name} ${passenger.first_name} ${passenger.patronymic}`}</div>
                                        <div className='Passengers-personalData-gender Passengers-personalData_field'>
                                            <div className='personalData-fieldTitle'>Пол</div>
                                            <div className='personalData-fieldValue'>{(passenger.gender === 'true') ? 'мужской' : 'женский'}</div>
                                        </div>
                                        <div className='Passengers-personalData-birthData Passengers-personalData_field'>
                                            <div className='personalData-fieldTitle'>Дата рождения</div>
                                            <div className='personalData-fieldValue'>{moment(passenger.birthday).format('DD.MM.YYYY')}</div>
                                        </div>
                                        <div className='Passengers-personalData-document Passengers-personalData_field'>
                                            <div className='personalData-fieldTitle'>{passenger.document_type}</div>
                                            <div className='personalData-fieldValue'>{passenger.document_data}</div>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                        <div className='Confirmation-totalPrice'>
                            <div className='Confirmation-totalPrice_wrapper'>
                                <div className='Confirmation-totalPrice-title'>Всего</div>
                                <div className="Confirmation-totalPrice-price">
                                    <span className='Confirmation-totalPrice_value'>{totalPrice}</span>
                                    <span className='Confirmation-totalPrice_rouble'> ₽</span>
                                </div>
                            </div>

                            <button
                                onClick={onChangePassengerClick}
                                className="Confirmation-Change-btn btn">
                                Изменить
                            </button>
                        </div>
                    </div>
                </div>

                <div className='Confirmation-Info '>
                    <div className='Confirmation-Info-fieldTitle Confirmation-Info_data'>
                        <div className='Info-title_value'>Способ оплаты</div>
                    </div>
                    <div className='Confirmation-Info-Payment'>
                        <div className='Confirmation-Info-Payment_type'>
                            {(payment_method === 'cash') ? 'Наличными' : 'Онлайн'}
                        </div>
                        <div className='Confirmation-Change'>
                            <button
                                onClick={onChangePaymentClick}
                                className="Confirmation-Change-btn btn">Изменить</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Order-Payment-btn_container">
                <button
                    onClick={onConfirmationClick}
                    className="Order-Payment-btn btn">Подтвердить</button>
            </div>
        </section>
    )
};
