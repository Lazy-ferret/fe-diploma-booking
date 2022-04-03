/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice } from '../../actions/tickets';

export default function TotalPrice(props) {
    const { currentCoach, selectedSeats, totalPrice } = useSelector(state => state.tickets);
    const { class_type } = useSelector(state => state.tickets.currentCoach.coach.coach);
    const { coach } = useSelector(state => state.tickets.currentCoach.coach);
    const dispatch = useDispatch();

    useEffect(() => {
        let price = 0;
        selectedSeats.map((seat) => {
            if (class_type === 'first') {
                price += coach.bottom_price;
            } else if (class_type === 'second') {
                price += (seat % 2 === 0) ? coach.top_price : coach.bottom_price;
            } else if (class_type === 'third') {
                price += (seat > 32 && coach.top_price !== 0)
                    ? coach.top_price
                    : (seat % 2 === 0) ? coach.top_price : coach.bottom_price;
            } else {
                price += (coach.price !== 0) ? coach.price : coach.bottom_price;
            }
            return price;
        })
        dispatch(setTotalPrice(price));
    }, [currentCoach, selectedSeats, dispatch]);

    return (
        <div className='ChooseSeats-TotalPrice'>
            <div className="TotalPrice-price">
                <span className='TotalPrice-price_value'>{totalPrice}</span>
                <span className='TotalPrice-price_rouble'>₽</span>
            </div>
        </div>
    )
};
