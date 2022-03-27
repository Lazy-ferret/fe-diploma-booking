import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCarType } from '../../actions/tickets'

export default function CarTypeSelection(props) {
    const dispatch = useDispatch()

    const onCarTypeClick = (e, type) => {
        const container = e.target.closest('.CarType-container')
        const active = container.querySelector('.active')
        if (active) active.classList.remove('active')
        e.target.closest('.CarType-type').classList.add('active')
        dispatch(setCarType(type))
    }

    return (
        <div className='ChooseSeats-CarType'>
            <div className='CarType-title'>Тип вагона</div>
            <div className='CarType-container'>
                <div className='CarType-type' onClick={(e) => onCarTypeClick(e, 'fourth')}>
                    <div className='CarType-icon fourth_class' ></div>
                    <span className='CarType-name'>Сидячий</span>
                </div>
                <div className='CarType-type' onClick={(e) => onCarTypeClick(e, 'third')}>
                    <div className='CarType-icon third_class'></div>
                    <span className='CarType-name'>Плацкарт</span>
                </div>
                <div className='CarType-type' onClick={(e) => onCarTypeClick(e, 'second')}>
                    <div className='CarType-icon second_class'></div>
                    <span className='CarType-name'>Купе</span>
                </div>
                <div className='CarType-type' onClick={(e) => onCarTypeClick(e, 'first')}>
                    <div className='CarType-icon first_class'></div>
                    <span className='CarType-name'>Люкс</span>
                </div>
            </div>
        </div>
    )
}
