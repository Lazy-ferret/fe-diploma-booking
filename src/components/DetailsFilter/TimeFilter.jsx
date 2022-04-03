import React from 'react';
import { Slider } from 'antd';
import './TimeFilter.css';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../actions/searchingRoute';

export default function TimeFilter({ type }) {
    const dispatch = useDispatch();
    const minTime = 0;
    const maxTime = 1440;

    const onDepartureChange = (value) => {
        dispatch(setFilters({
            [`${type}_departure_hour_from`]: value[0], [`${type}_departure_hour_to`]: value[1]
        }))
    };

    const onArrivalChange = (value) => {
        dispatch(setFilters({
            [`${type}_arrival_hour_from`]: value[0], [`${type}_arrival_hour_to`]: value[1]
        }))
    };

    const getFormatedTime = (value) => {
        const hour = Math.floor(value / 60);
        const minutes = value - hour * 60;
        return typeof value !== 'undefined'
            ? `${`0${hour}`.slice(-2)}:${`0${minutes}`.slice(-2)}`
            : '';
    };

    return (
        <div className="Details-TimeFilter-slider_container">
            <div className="Details-TimeFilter-slider departure">
                <div className="slider-title departure">Время отбытия</div>
                <Slider
                    className="PriceFilter-slider_item"
                    min={minTime}
                    max={maxTime}
                    step={10}
                    range={{ draggableTrack: true }}
                    tooltipVisible
                    tooltipPlacement="bottom"
                    tipFormatter={(value) => getFormatedTime(value)}
                    onChange={onDepartureChange}
                />
                <div className="Details-TimeFilter-time">
                    <span className="time-min">{getFormatedTime(minTime)}</span>
                    <span className="time-max">{getFormatedTime(maxTime)}</span>
                </div>
            </div>

            <div className="Details-TimeFilter-slider arrival">
                <div className="slider-title arrival">Время прибытия</div>
                <Slider
                    className="PriceFilter-slider_item"
                    min={minTime}
                    max={maxTime}
                    step={10}
                    range={{ draggableTrack: true }}
                    tooltipVisible
                    tooltipPlacement="bottom"
                    tipFormatter={(value) => getFormatedTime(value)}
                    onChange={onArrivalChange}
                />
                <div className="Details-TimeFilter-time">
                    <span className="time-min">{getFormatedTime(minTime)}</span>
                    <span className="time-max">{getFormatedTime(maxTime)}</span>
                </div>
            </div>
        </div>
    )
};
