import React from 'react'
import Seat from './Seat'

export default function CarFirstClass({ seatsAvailable, changeSeatsList }) {
  return (
    <>
      <div className='CarScheme-seats-list top-row'>
        <div className='CarScheme-seats-block'>
          <Seat number={1} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={2} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={3} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={4} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={5} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={6} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={7} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={8} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={9} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={10} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={11} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={12} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={13} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={14} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={15} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={16} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
      </div>
    </>
  )
}
