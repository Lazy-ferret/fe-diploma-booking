import React from 'react';
import CarSecondClass from './CarSecondClass';
import Seat from './Seat';

export default function CarThirdClass({ seatsAvailable, changeSeatsList }) {
  return (
    <>
      <CarSecondClass seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />

      <div className='CarScheme-seats-list bottom-row'>
        <div className='CarScheme-seats-block'>
          <Seat number={33} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={34} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={35} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={66} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={37} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={38} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={39} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={40} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={41} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={42} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={43} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={44} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={45} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={46} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={47} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={48} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
      </div>
    </>
  )
};
