import React from 'react'
import moment from 'moment';
export default function DirectionDetails({ type }) {
  return (
    <>
      <div className='train-info train-number'>
        <div className="train-info_title">№ Поезда</div>
        <div className="train-info_value">
          <span>{type.train._id}</span>
        </div>
      </div>
      <div className='train-info train-name'>
        <div className="train-info_title">Название</div>
        <div className="train-info_value">
          <span>{type.from.city.name}</span>
          <span>{type.to.city.name}</span>
        </div>
      </div>

      <div className='Details-time-info'>

        <div className='Details-time-container forward-direction'>
          <div className='time-wrapper departure-time'>
            <span className="route-time">{moment(type.from.datetime).format('hh:mm')}</span>
            <span className="route-date">{moment(type.from.datetime).format('DD.MM.YYYY')}</span>
          </div>
          <div className="route-duration_wrapper">
            <span className="route-duration">{moment(type.duration).format('hh : mm')}</span>
            <div className="route-direction-arrow"></div>
          </div>
          <div className='time-wrapper arrival-time'>
            <span className="route-time">{moment(type.to.datetime).format('hh:mm')}</span>
            <span className="route-date">{moment(type.to.datetime).format('DD.MM.YYYY')}</span>
          </div>
        </div>


        <div className='Details-route-info'>
          <div className='Details-route departure-point'>
            <span className="route-city">{type.from.city.name}</span>
            <span className="route-station">{type.from.railway_station_name} вокзал</span>
          </div>
          <div className='Details-route destination-point'>
            <span className="route-city">{type.to.city.name}</span>
            <span className="route-station">{type.to.railway_station_name} вокзал</span>
          </div>
        </div>

      </div>
    </>
  )
}
