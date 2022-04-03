import React from 'react';
import moment from 'moment';

export default function CurrentTrainInfo({ type }) {
    return (
        <div className='ChooseSeats-Route-info'>
            <div className='ChooseSeats-train-info'>
                <div className="ChooseSeats-train-icon"></div>
                <div className="ChooseSeats-train_wrapper">
                    <div className="ChooseSeats-train-number">{type.train._id}</div>
                    <div className="ChooseSeats-train-route">
                        <div className="route-departure-point">
                            <span>{type.from.city.name} →</span>
                        </div>
                        <div className="route-destination-point">
                            <span>{type.to.city.name}</span>
                        </div>
                        <div className="train-firmName">
                            <span>«{type.train.name}»</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ChooseSeats-time-info'>
                <div className='ChooseSeats-time-container forward-direction'>
                    <div className='ChooseSeats-time-wrapper departure-time'>
                        <span className="ChooseSeats-time-time">{moment(type.from.datetime).format('hh:mm')}</span>
                        <span className="ChooseSeats-time-city">{type.from.city.name}</span>
                        <span className="ChooseSeats-time-station">{type.from.railway_station_name} вокзал</span>
                    </div>
                    <div className="ChooseSeats-direction-arrow"></div>
                    <div className='ChooseSeats-time-wrapper arrival-time'>
                        <span className="ChooseSeats-time-time">{moment(type.to.datetime).format('hh:mm')}</span>
                        <span className="ChooseSeats-time-city">{type.to.city.name}</span>
                        <span className="ChooseSeats-time-station">{type.to.railway_station_name} вокзал</span>
                    </div>
                </div>
            </div>
            <div className="ChooseSeats-duration_wrapper">
                <div className="ChooseSeats-duration-icon"></div>
                <div className="ChooseSeats-duration">
                    <span>{moment(type.duration).format('hh')} часов</span>
                    <span>{moment(type.duration).format('mm')} минуты</span>
                </div>
            </div>
        </div>
    )
};
