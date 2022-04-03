import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderStatus } from '../../actions/order';
import { Collapse } from 'antd';
import './PassengersSection.css';
import PassengerCard from './PassengerCard';

export default function PassengersSection(props) {
    const { selectedSeats } = useSelector(state => state.tickets);
    const { passengers } = useSelector(state => state.order);
    const dispatch = useDispatch();
    const { Panel } = Collapse;

    const onNewClick = () => {
        dispatch(setOrderStatus(1));
    };

    const onButtonClick = () => {
        if (passengers.length) {
            dispatch(setOrderStatus(3));
        }
    };

    return (
        <section className="Order-Result">
            <div className='Order-Passengers-container'>
                <Collapse
                    ghost
                    expandIconPosition="left"
                    expandIcon={null} >
                    {
                        selectedSeats.map((seat, index) =>
                            <Panel
                                showArrow={false}
                                header={
                                    <div className='Passenger-Info-title'>
                                        <div className='Passenger-Info-btn btn'></div>
                                        <div className='Info-title_value'>Пассажир {index + 1}</div>
                                        {/* <div className='Passenger-Info-btn delete_btn btn'></div> */}
                                    </div>
                                }
                                key={index.toString()}>
                                <PassengerCard seat={seat} />
                            </Panel>
                        )
                    }
                </Collapse>

                <div className='Passenger-Info add_new_passenger'>
                    <div className='Passenger-Info-title'>
                        <div className='Info-title_value'>Добавить пассажира</div>
                        <div className='Passenger-Info-btn add_btn btn' onClick={onNewClick}></div>
                    </div>
                </div>
            </div>

            {(selectedSeats.length === passengers.length) &&
                <div className="Order-ChooseSeats-btn_container">
                    <button
                        onClick={onButtonClick}
                        className="Order-ChooseSeats-btn btn">Далее</button>
                </div>
            }
        </section>
    )
};
