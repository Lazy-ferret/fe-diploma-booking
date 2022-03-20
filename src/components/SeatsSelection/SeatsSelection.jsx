import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentRoute } from '../../actions/routes';
import moment from 'moment';
import { Form, Input } from 'antd';
import './SeatsSelection.css';

function SeatsSelection(props) {
    const { departure } = useSelector(state => state.routes.currentRoute);

    const dispatch = useDispatch();
    let maxTickets = 5;
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [infantTickets, setInfantTickets] = useState(0);
    let availableTickets = maxTickets - adultTickets - childTickets - infantTickets;
    let totalTickets = Number(adultTickets + childTickets + infantTickets)

    const onChangeTrainClick = () => {
        dispatch(clearCurrentRoute())
    }

    return (

        <section className="Order-Result">

            <div className="Order-ChooseSeats-header">
                <div className="ChooseSeats-title">
                    Выбор мест
                </div>
            </div>

            <div className='Order-ChooseSeats-container'>

                <div className='Order-ChooseSeats chooseSeats-forward'>

                    <div className='ChooseSeats-CnangeTrain chooseSeats-forward'>
                        <div className='ChooseSeats-direction_icon chooseSeats-forward'></div>
                        <button className='ChooseSeats-CnangeTrain-btn btn' onClick={onChangeTrainClick} >Выбрать другой поезд</button>
                    </div>

                    <div className='ChooseSeats-Route-info'>

                        <div className='ChooseSeats-train-info'>
                            <div className="ChooseSeats-train-icon"></div>
                            <div className="ChooseSeats-train_wrapper">
                                <div className="ChooseSeats-train-number">{departure.train._id}</div>
                                <div className="ChooseSeats-train-route">
                                    {/* <div className="route-starting-point">
                                <span>{departure.from.city.name} →</span>
                            </div> */}
                                    <div className="route-departure-point">
                                        <span>{departure.from.city.name} →</span>
                                    </div>
                                    <div className="route-destination-point">
                                        <span>{departure.to.city.name}</span>
                                    </div>
                                    <div className="train-firmName">
                                        <span>«{departure.train.name}»</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='ChooseSeats-time-info'>
                            <div className='ChooseSeats-time-container forward-direction'>
                                <div className='ChooseSeats-time-wrapper departure-time'>
                                    <span className="ChooseSeats-time-time">{moment(departure.from.datetime).format('hh:mm')}</span>
                                    <span className="ChooseSeats-time-city">{departure.from.city.name}</span>
                                    <span className="ChooseSeats-time-station">{departure.from.railway_station_name} вокзал</span>
                                </div>
                                <div className="ChooseSeats-direction-arrow"></div>
                                <div className='ChooseSeats-time-wrapper arrival-time'>
                                    <span className="ChooseSeats-time-time">{moment(departure.to.datetime).format('hh:mm')}</span>
                                    <span className="ChooseSeats-time-city">{departure.to.city.name}</span>
                                    <span className="ChooseSeats-time-station">{departure.to.railway_station_name} вокзал</span>
                                </div>
                            </div>
                        </div>

                        <div className="ChooseSeats-duration_wrapper">
                            <div className="ChooseSeats-duration-icon"></div>
                            <div className="ChooseSeats-duration">
                                <span>{moment(departure.duration).format('hh')} часов</span>
                                <span>{moment(departure.duration).format('mm')} минуты</span>
                            </div>
                        </div>
                    </div>

                    <div className='ChooseSeats-TicketsQuantity'>
                        <div className='TicketsQuantity-title'>Количество билетов</div>


                        <Form className='TicketsQuantity-container'>
                            <Form.Item className='TicketsQuantity-type'>
                                <Input
                                    className='TicketsQuantity-type-quantity'
                                    type='number'
                                    defaultValue={0}
                                    max={5}
                                    min={0}
                                    value={adultTickets}
                                    onChange={(e) => setAdultTickets(Number(e.target.value))}
                                    prefix='Взрослых —' />
                                <div className='TicketsQuantity-type-hint'>
                                    Можно добавить еще {availableTickets} пассажиров
                                </div>
                            </Form.Item>
                            <Form.Item className='TicketsQuantity-type'>
                                <Input
                                    className='TicketsQuantity-type-quantity'
                                    type='number'
                                    defaultValue={0}
                                    max={5}
                                    min={0}
                                    value={childTickets}
                                    onChange={(e) => setChildTickets(Number(e.target.value))}
                                    prefix='Детских —' />
                                <div className='TicketsQuantity-type-hint'>
                                    Можно добавить еще {availableTickets} детей до 10 лет. Свое место
                                    в вагоне, как у взрослых, но дешевле в среднем
                                    на 50-65%
                                </div>
                            </Form.Item>
                            <Form.Item className='TicketsQuantity-type'>
                                <Input
                                    className='TicketsQuantity-type-quantity'
                                    type='number'
                                    defaultValue={0}
                                    max={5}
                                    min={0}
                                    value={infantTickets}
                                    onChange={(e) => setInfantTickets(Number(e.target.value))}
                                    prefix='Детских «без места» —' />
                            </Form.Item>
                        </Form>                  
                    </div>

                    {/* <div class='ChooseSeats-CarType'>
                <div class='CarType-title'>Тип вагона</div>
                <div class='CarType-container'>
                    <div class='CarType-type'>
                        <div class='CarType-icon third_class'></div>
                        <span class='CarType-name'>Сидячий</span>
                    </div>
                    <div class='CarType-type'>
                        <div class='CarType-icon second_class'></div>
                        <span class='CarType-name'>Плацкарт</span>
                    </div>
                    <div class='CarType-type active'>
                        <div class='CarType-icon first_class active'></div>
                        <span class='CarType-name'>Купе</span>
                    </div>
                    <div class='CarType-type'>
                        <div class='CarType-icon luxe'></div>
                        <span class='CarType-name'>Люкс</span>
                    </div>
                </div>
            </div> */}

                    {/* <div class='Details-Car-numbers_container'>
                <div class='Car-numbers'>
                    <span>Вагоны</span>
                    <ul class='Car-numbers_list'>
                        <li class='Car-numbers_item current'>07</li>
                        <li class='Car-numbers_item'>09</li>
                    </ul>
                </div>
                <div class='Car-numbers-hint'>Нумерация вагонов
                    начинается с головы поезда
                </div>
            </div> */}

                    {/* <div class='ChooseSeats-CurrentCar_container'>
                <div class='ChooseSeats-Details'>
                    <div class='Details-CurrentCar_container'>
                        <div class='CurrentCar-number'>
                            <span class='car-number'>07</span>
                            <span>вагон</span>
                        </div>

                        <div class='CurrentCar-seats details_block'>
                            <div class='seats-total'>
                                <span>Места</span>
                                <span class='seats-total_quantity'>11</span>
                            </div>
                            <div class='seats-upper'>
                                <div class='seats-category'>Верхние</div>
                                <div class='seats-upper_quantity'>3</div>
                            </div>
                            <div class='seats-lower'>
                                <div class='seats-category'>Нижние</div>
                                <div class='seats-lower_quantity'>8</div>
                            </div>
                        </div>


                        <div class='CurrentCar-price-container details_block'>
                            <div class='CurrentCar-price-title'>Стоимость</div>

                            <div class="CurrentCar-price upper">
                                <span class='CurrentCar-price_value'>2 920</span>
                                <span class='CurrentCar-price_rouble'>₽</span>
                            </div>
                            <div class="CurrentCar-price lower">
                                <span class='CurrentCar-price_value'>3 530</span>
                                <span class='CurrentCar-price_rouble'>₽</span>
                            </div>
                        </div>

                        <div class='CurrentCar-features details_block'>
                            <div class='CurrentCar-features-service'>
                                <span>Обслуживание</span>
                                <span class='features-service-name'>ФПК</span>
                            </div>

                            <div class='CurrentCar-features-icons'>
                                <div class='features-icon features-air_cond btn'>
                                    <span class='features-hint'>кондиционер</span>
                                </div>
                                <div class='features-icon features-wi_fi btn'>
                                    <span class='features-hint hidden'>WI-FI</span>
                                </div>
                                <div class='features-icon features-linens btn choosen'>
                                    <span class='features-hint hidden'>белье</span>
                                </div>
                                <div class='features-icon features-food btn choosen'>
                                    <span class='features-hint hidden'>питание</span>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

             <div class='ChooseSeats-CarScheme'>
                    <div class='CarScheme-hint'>
                        11 человек выбирают места в этом поезде
                    </div>
                    <div class='CarScheme-scheme first_class'></div>
                </div>
                <div class='ChooseSeats-TotalPrice'>
                    <div class="TotalPrice-price">
                        <span class='TotalPrice-price_value'></span>
                        <span class='TotalPrice-price_rouble'></span>
                    </div>
                </div>
            </div>  */}

                </div>

                {/* <div class='Order-ChooseSeats chooseSeats-backward'>
            <div class='ChooseSeats-CnangeTrain chooseSeats-backward'>
                <div class='ChooseSeats-direction_icon chooseSeats-backward'></div>
                <button class='ChooseSeats-CnangeTrain-btn btn'>Выбрать другой поезд</button>
            </div>

            <div class='ChooseSeats-Route-info'>

                <div class='ChooseSeats-train-info'>
                    <div class="ChooseSeats-train-icon">
                        <img src="img/train-icon_yellow.png" alt="train-icon" />
                    </div>
                    <div class="ChooseSeats-train_wrapper">
                        <div class="ChooseSeats-train-number">116C</div>
                        <div class="ChooseSeats-train-route">
                            <div class="route-starting-point">
                                <span>Адлер →</span>
                            </div>
                            <div class="route-departure-point">
                                <span>Москва →</span>
                            </div>
                            <div class="route-destination-point">
                                <span>Санкт-Петербург</span>
                            </div>
                            <div class="train-firmName">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='ChooseSeats-time-info'>
                    <div class='ChooseSeats-time-container backward-direction'>
                        <div class='ChooseSeats-time-wrapper departure-time'>
                            <span class="ChooseSeats-time-time">00:10</span>
                            <span class="ChooseSeats-time-city">Москва</span>
                            <span class="ChooseSeats-time-station">Курский вокзал</span>
                        </div>
                        <div class="ChooseSeats-direction-arrow">
                            <img src="img/arrow-left-yellow.png" alt="direction-arrow" />
                        </div>
                        <div class='ChooseSeats-time-wrapper arrival-time'>
                            <span class="ChooseSeats-time-time">09:52</span>
                            <span class="ChooseSeats-time-city">Санкт-Петербург</span>
                            <span class="ChooseSeats-time-station">Ладожский вокзал</span>
                        </div>
                    </div>
                </div>

                <div class="ChooseSeats-duration_wrapper">
                    <div class="ChooseSeats-duration-icon">
                        <img src="img/duration-icon_yellow.png" alt="duration-icon" />
                    </div>
                    <div class="ChooseSeats-duration">
                        <span>9 часов</span>
                        <span>42 минуты</span>
                    </div>
                </div>
            </div>

            <div class='ChooseSeats-TicketsQuantity'>
                <div class='TicketsQuantity-title'>Количество билетов</div>
                <div class='TicketsQuantity-container'>
                    <div class='TicketsQuantity-type current'>
                        <div class='TicketsQuantity-type-quantity'>Взрослых —
                            <span>2</span>
                        </div>
                        <div class='TicketsQuantity-type-hint'>
                            Можно добавить еще 3 пассажиров
                        </div>
                    </div>
                    <div class='TicketsQuantity-type'>
                        <div class='TicketsQuantity-type-quantity'>Детских —
                            <span>1</span>
                        </div>
                        <div class='TicketsQuantity-type-hint'>
                        </div>
                    </div>
                    <div class='TicketsQuantity-type'>
                        <div class='TicketsQuantity-type-quantity'> Детских «без места» —
                            <span>0</span>
                        </div>
                        <div class='TicketsQuantity-type-hint'></div>
                    </div>
                </div>
            </div>

            <div class='ChooseSeats-CarType'>
                <div class='CarType-title'>Тип вагона</div>
                <div class='CarType-container'>
                    <div class='CarType-type'>
                        <div class='CarType-icon third_class'></div>
                        <span class='CarType-name'>Сидячий</span>
                    </div>
                    <div class='CarType-type'>
                        <div class='CarType-icon second_class'></div>
                        <span class='CarType-name'>Плацкарт</span>
                    </div>
                    <div class='CarType-type'>
                        <div class='CarType-icon first_class'></div>
                        <span class='CarType-name'>Купе</span>
                    </div>
                    <div class='CarType-type'>
                        <div class='CarType-icon luxe'></div>
                        <span class='CarType-name'>Люкс</span>
                    </div>
                </div>
            </div>



        </div> */}

            </div>


            <div className="Order-ChooseSeats-btn_container">
                <button className="Order-ChooseSeats-btn btn">Далее</button>
            </div>



        </section>


    )
}

export default SeatsSelection
