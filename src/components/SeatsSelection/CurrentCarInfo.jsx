import React from 'react'
import { useSelector } from 'react-redux'
import CarScheme from './CarScheme'
import TotalPrice from './TotalPrice'

export default function CurrentCarInfo(props) {
    const { coach } = useSelector(state => state.tickets.currentCoach.coach)
    const {selectedSeats} = useSelector(state => state.tickets)

    const onMouseOver = (e) => {
        e.target.querySelector('.features-hint').classList.remove('hidden')
    }

    const onMouseOut = (e) => {
        e.target.querySelector('.features-hint').classList.add('hidden')
    }

    const onFeatureClick = (e) => {
        e.target.classList.add("choosen")
    }


    return (
        <div className='ChooseSeats-CurrentCar_container'>
            <div className='ChooseSeats-Details'>
                <div className='Details-CurrentCar_container'>
                    <div className='CurrentCar-number'>
                        <span className='car-number'>{coach._id}</span>
                        <span>вагон</span>
                    </div>

                    <div className='CurrentCar-seats details_block'>

                        <div className='seats-total'>
                            <span>Места</span>
                            <span className='seats-total_quantity'> {coach.available_seats}</span>
                        </div>
                        {(coach.class_type === 'second' || coach.class_type === 'third') &&
                            <div className='seats-upper'>
                                <div className='seats-category'>Верхние</div>
                                <div className='seats-upper_quantity'>{coach.available_seats}</div>
                            </div>
                        }
                        {(coach.class_type === 'second' || coach.class_type === 'third') &&
                            <div className='seats-lower'>
                                <div className='seats-category'>Нижние</div>
                                <div className='seats-lower_quantity'>{coach.available_seats}</div>
                            </div>
                        }
                    </div>

                    <div className='CurrentCar-price-container details_block'>
                        <div className='CurrentCar-price-title'>Стоимость</div>

                        {(coach.class_type === 'second' || coach.class_type === 'third') &&
                            <div className="CurrentCar-price upper">
                                <span className='CurrentCar-price_value'>{coach.top_price}</span>
                                <span className='CurrentCar-price_rouble'>₽</span>
                            </div>
                        }

                        <div className="CurrentCar-price lower">
                            <span className='CurrentCar-price_value'>{coach.bottom_price}</span>
                            <span className='CurrentCar-price_rouble'>₽</span>
                        </div>
                    </div>

                    <div className='CurrentCar-features details_block'>
                        <div className='CurrentCar-features-service'>
                            <span>Обслуживание</span>
                            <span className='features-service-name'>ФПК</span>
                        </div>

                        <div className='CurrentCar-features-icons'>
                            {coach.have_air_conditioning &&
                                <div className='features-icon features-air_cond btn'
                                    onMouseOver={onMouseOver}
                                    onMouseOut={onMouseOut}
                                    onClick={onFeatureClick}
                                >
                                    <span className='features-hint hidden'>кондиционер</span>
                                </div>
                            }

                            {coach.have_wifi &&
                                <div className='features-icon features-wi_fi btn'
                                    onMouseOver={onMouseOver}
                                    onMouseOut={onMouseOut}
                                    onClick={onFeatureClick}
                                >
                                    <span className='features-hint hidden'>WI-FI</span>
                                </div>
                            }
                            {coach.is_linens_included &&
                                <div className='features-icon features-linens btn'
                                    onMouseOver={onMouseOver}
                                    onMouseOut={onMouseOut}
                                    onClick={onFeatureClick}>
                                    <span className='features-hint hidden'>белье</span>
                                </div>
                            }
                            {(coach.class_type === 'first' || coach.class_type === 'second') &&
                                <div className='features-icon features-food btn'
                                    onMouseOver={onMouseOver}
                                    onMouseOut={onMouseOut}
                                    onClick={onFeatureClick}>
                                    <span className='features-hint hidden'>питание</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </div>

            <CarScheme />

            {selectedSeats && selectedSeats.length > 0 && <TotalPrice />}

            

        </div>
    )
}



