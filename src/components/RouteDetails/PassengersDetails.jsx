import React from 'react'
import { useSelector } from 'react-redux'

export default function PassengersDetails(props) {
  const { adult, child, infant } = useSelector(state => state.tickets.passengersAge)

  const setAdultName = () => {
    let adultName = (adult === 1) ? ' Взрослый' : ' Взрослых'
    return adultName
  }

  const setChildName = () => {
    let childName = ((child + infant) === 1)
      ? ' Ребенок'
      : ((child + infant) < 5) ? ' Ребенка' : ' Детей'
    return childName
  }

  return (
    <>
      <div className="Details-Passengers-currentPrice">

        <div className='currentPrice-wrapper'>
          <div className='Passengers-ticketType'>
            <span className='Passengers-ticketType_quantity'>{adult}</span>
            <span className='Passengers-ticketType_type'>{setAdultName()}</span>
          </div>
          <div className="currentPrice-price">
            <span className='currentPrice-price_value'>{ }</span>
            <span className='currentPrice-price_rouble'>₽</span>
          </div>
        </div>

        <div className='currentPrice-wrapper'>
          <div className='Passengers-ticketType'>
            <span className='Passengers-ticketType_quantity'>{child + infant}</span>
            <span className='Passengers-ticketType_type'>{setChildName()}</span>
          </div>
          <div className="currentPrice-price">
            <span className='currentPrice-price_value'>{ }</span>
            <span className='currentPrice-price_rouble'>₽</span>
          </div>
        </div>
      </div>
    </>

  )
}

