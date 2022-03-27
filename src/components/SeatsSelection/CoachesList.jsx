import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentCoach, setCurrentCoach } from '../../actions/tickets';

export default function CoachesList(props) {
    const { availableSeats, currentCarType } = useSelector(state => state.tickets)

    const [coaches, setCoaches] = useState([])
    // const [currentCoach, setCurrentCoach] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('useEffected')
        console.log(currentCarType)
        if (availableSeats) {
            const filteredCoaches = availableSeats.data.filter((coach) => coach.coach.class_type === currentCarType)
            setCoaches(filteredCoaches)
        }
    }, [currentCarType]);

    const onLiClick = (e) => {
        let CarNumberList = document.querySelector('.Car-numbers_list')
        CarNumberList.querySelector('.current').classList.remove('current')
        e.target.classList.add('current')
    }

    const getClassName = () => {
        console.log("getClassName")
        let CarNumberList = document.querySelector('.Car-numbers_list')
        let CarNumbers
        if (CarNumberList) CarNumbers = CarNumberList.querySelectorAll('li')
        if (CarNumbers) CarNumbers[0].classList.add('current')
        return
    }

    useEffect(() => {
        getClassName()
    }, [currentCarType, coaches]);

    useEffect(() => {
        let CarNumberList = document.querySelector('.Car-numbers_list')
        let current
        if (CarNumberList) current = CarNumberList.querySelector('.current')

        if (current) {
            dispatch(setCurrentCoach(availableSeats.data.find
                (coach => coach.coach._id === Number(current.textContent))))
        } else {dispatch(clearCurrentCoach())}
    }, [coaches]);

    return (
        (coaches.length > 0)
            ? <div className='Details-Car-numbers_container'>
                <div className='Car-numbers'>
                    <span>Вагоны</span>
                    <ul className='Car-numbers_list'>
                        {coaches && coaches.map((coach) =>
                            <li
                                onClick={onLiClick}
                                className='Car-numbers_item'
                                key={coach.coach._id}>{coach.coach._id}</li>
                        )}
                    </ul>
                </div>
                <div className='Car-numbers-hint'>Нумерация вагонов
                    начинается с головы поезда
                </div>
            </div>
            : <div className='Details-Car-numbers_container'>В вагонах этого класса нет свободных мест</div>
    )
}

