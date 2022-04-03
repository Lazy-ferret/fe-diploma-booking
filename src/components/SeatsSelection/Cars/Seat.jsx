import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { message } from 'antd';

export default function Seat({ number, seatsAvailable, changeSeatsList }) {
    const [selectedSeat, setSelectedSeat] = useState(false);
    const { ticketsQuantity, selectedSeats } = useSelector(state => state.tickets);

    const getClassName = () => {
        let available = seatsAvailable.includes(number)
            ? 'available'
            : '';
        let selected = selectedSeat ? 'selected' : '';
        return `CarScheme-seat ${available} ${selected}`;
    };

    const onSeatClick = (seatNumber) => {
        if (selectedSeats.length < ticketsQuantity) {
            if (seatsAvailable.includes(number)) {
                setSelectedSeat(!selectedSeat);
                changeSeatsList(seatNumber);
            } else {
                return;
            }
        } else {
            if (selectedSeats.includes(seatNumber)) {
                setSelectedSeat(!selectedSeat);
                changeSeatsList(seatNumber);
            } else {
                const warning = () => {
                    message.warning('Количество мест не может превышать количества билетов');
                };
                warning();
            };
        };
    }

    return (
        <div
            className={getClassName()}
            aria-hidden="true"
            onClick={() => onSeatClick(number)}
        >{number}</div>
    )
};
