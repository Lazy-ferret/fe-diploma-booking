import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarFirstClass from './Cars/CarFirstClass'
import CarFourthClass from './Cars/CarFourthClass'
import CarSecondClass from './Cars/CarSecondClass'
import CarThirdClass from './Cars/CarThirdClass'
import './Cars/Cars.css';
import { clearsetSelectedSeats, setSelectedSeats } from '../../actions/tickets'
import { resetWarningCache } from 'prop-types'

export default function CarScheme(props) {
    const { class_type } = useSelector(state => state.tickets.currentCoach.coach.coach)
    const { coach, seats } = useSelector(state => state.tickets.currentCoach.coach)
    const { selectedSeats, ticketsQuantity } = useSelector(state => state.tickets)
    const dispatch = useDispatch()
    const [seatList, setSeatList] = useState([])

    useEffect(() => {
        dispatch(setSelectedSeats(seatList))
    }, [seatList]);



    const seatsAvailable = seats.map((seat) => {
        if (seat.available) {
            return seat.index
        }
    })



    const changeSeatsList = (seatNumber) => {
        if ((seatList.length > 0) && seatList.includes(seatNumber)) {
            const newList = seatList.filter((seat) => {
                return seat !== seatNumber
            })
            setSeatList(newList)
        } else {
            setSeatList([...seatList, seatNumber])
        }
    }

    return (
        <div className='ChooseSeats-CarScheme'>
            <div className='CarScheme-hint'>
                {Math.ceil(Math.random() * 10)} человек выбирают места в этом поезде
            </div>

            <div className={`CarScheme-wrapper ${class_type}`}>
                <div className='CarScheme-carNumber'>{coach._id}</div>
                <div className='CarScheme-cover'>
                    {class_type === 'first' && <CarFirstClass seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />}
                    {class_type === 'second' && <CarSecondClass seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />}
                    {class_type === 'third' && <CarThirdClass seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />}
                    {class_type === 'fourth' && <CarFourthClass seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />}
                </div>


            </div>

            {/* <div className='CarScheme-scheme first_class'></div> */}
        </div>


    )
}

