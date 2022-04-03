import React from 'react';
import Seat from './Seat';

export default function CarSecondClass({ seatsAvailable, changeSeatsList }) {
  return (
    <>
      <div className='CarScheme-seats-list top-row'>
        <div className='CarScheme-seats-block'>
          <Seat number={1} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={2} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={3} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={4} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={5} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={6} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={7} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={8} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={9} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={10} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={11} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={12} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={13} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={14} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={15} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={16} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={17} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={18} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={19} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={20} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={21} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={22} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={23} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={24} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={25} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={26} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={27} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={28} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
        <div className='CarScheme-seats-block'>
          <Seat number={29} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={30} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={31} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
          <Seat number={32} seatsAvailable={seatsAvailable} changeSeatsList={changeSeatsList} />
        </div>
      </div>
    </>
  )
};
