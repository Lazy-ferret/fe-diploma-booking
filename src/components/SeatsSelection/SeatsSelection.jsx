import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentRoute } from '../../actions/routes';
import './SeatsSelection.css';
import CurrentTrainInfo from './CurrentTrainInfo';
import TicketsQuantity from './TicketsQuantity';
import { requestSeats } from '../../lib/api';
import { getAvailableSeats } from '../../actions/tickets';
import CarTypeSelection from './CarTypeSelection';
import CoachesList from './CoachesList';
import CurrentCarInfo from './CurrentCarInfo';
import { setOrderStatus } from '../../actions/order';

function SeatsSelection(props) {
    const { departure } = useSelector(state => state.routes.currentRoute);
    const { arrival } = useSelector(state => state.routes.currentRoute);
    const { ticketsQuantity, totalPrice } = useSelector(state => state.tickets);
    const { filters } = useSelector(state => state.searchingRoute)
    const { currentCarType, currentCoach } = useSelector(state => state.tickets)

    const dispatch = useDispatch();   

    useEffect(() => {        
        dispatch(getAvailableSeats(departure._id, filters))
    }, [ticketsQuantity, filters]);

    const onChangeTrainClick = () => {
        dispatch(clearCurrentRoute())
    }

    const onButtonClick = () => {
        if (totalPrice && ticketsQuantity) {
            dispatch(setOrderStatus(2))
        }
    }

    const getClassName = () => {
        let inactive = (!totalPrice || !ticketsQuantity) ? 'inactive' : ''
        let className = `Order-ChooseSeats-btn btn ${inactive}`
        return className
    }

    return (

        <section className="Order-Result">
            <div className="Order-ChooseSeats-header">
                <div className="ChooseSeats-title">
                    Выбор мест
                </div>
            </div>
            <div className='Order-ChooseSeats-container'>
                {departure &&
                    <div className='Order-ChooseSeats chooseSeats-forward'>
                        <div className='ChooseSeats-CnangeTrain chooseSeats-forward'>
                            <div className='ChooseSeats-direction_icon chooseSeats-forward'></div>
                            <button className='ChooseSeats-CnangeTrain-btn btn' onClick={onChangeTrainClick} >Выбрать другой поезд</button>
                        </div>
                        <CurrentTrainInfo type={departure} />
                        <TicketsQuantity />
                        <CarTypeSelection />
                        {currentCarType && <CoachesList />}
                        {currentCoach && <CurrentCarInfo />}
                    </div>}

                {arrival &&
                    <div className='Order-ChooseSeats chooseSeats-backward'>
                        <div className='ChooseSeats-CnangeTrain chooseSeats-backward'>
                            <div className='ChooseSeats-direction_icon chooseSeats-backward'></div>
                            <button className='ChooseSeats-CnangeTrain-btn btn' onClick={onChangeTrainClick} >Выбрать другой поезд</button>
                        </div>
                        <CurrentTrainInfo type={arrival} />
                        <TicketsQuantity />
                        <CarTypeSelection />
                        {currentCarType && <CoachesList />}
                        {currentCoach && <CurrentCarInfo />}
                    </div>}
            </div>

            <div className="Order-ChooseSeats-btn_container">
                <button className={getClassName()} onClick={onButtonClick}>Далее</button>
            </div>
        </section>
    )
}

export default SeatsSelection
