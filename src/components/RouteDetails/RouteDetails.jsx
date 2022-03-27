import React from 'react'
import './RouteDetails.css';
import { Collapse } from 'antd';
import moment from 'moment';
import TimeFilter from '../DetailsFilter/TimeFilter';
import DirectionDetails from './DirectionDetails';
import { useSelector } from 'react-redux';
import PassengersDetails from './PassengersDetails';

export default function RouteDetails(props) {
    const { Panel } = Collapse;
    const { departure, arrival } = useSelector(state => state.routes.currentRoute);
    const { totalPrice } = useSelector(state => state.tickets)

    return (
        <section className="Details Details-Passengers">
            <div className="Details-Passengers-title">Детали поездки</div>

            <Collapse
                ghost
                expandIconPosition="right"
                expandIcon={null} >
                {departure &&
                    <Panel
                        showArrow={false}
                        header={
                            <div className="Details-Direction forward-direction">
                                <div className="Details-Direction-Icon forward-direction"></div>
                                <div className="Details-Direction_title">
                                    <span>Туда</span>
                                    <span className="Details-travel-date">{moment(departure.from.datetime).format('DD.MM.YYYY')}</span></div>
                                <div className="Details-Direction-btn dropdown-btn"></div>
                            </div>
                        }
                        key="1">
                        <DirectionDetails type={departure} />
                    </Panel>}

                {arrival &&
                    <Panel
                        showArrow={false}
                        header={
                            <div className="Details-Direction backward-direction">
                                <div className="Details-Direction-Icon backward-direction"></div>
                                <div className="Details-Direction_title">
                                    <span>Обратно</span>
                                    <span class="Details-travel-date">{moment(arrival.from.datetime).format('DD.MM.YYYY')}</span>
                                </div>
                                <div className="Details-Direction-btn dropdown-btn"></div>
                            </div>
                        }
                        key="2">
                        <DirectionDetails type={arrival} />
                    </Panel>
                }
                <Panel
                    showArrow={false}
                    header={
                        <div className="Details-Passengers-price">
                            <div className="Details-Passengers-icon"></div>
                            <div className="Details-Direction_title">
                                <span>Пассажиры</span>
                            </div>
                            <div className="Details-Direction-btn dropdown-btn"></div>
                        </div>
                    }
                    key="3">
                    <PassengersDetails />
                </Panel>
            </Collapse>


            <div className="Details-Passengers-totalPrice">
                <div className='totalPrice-title'>Итог</div>
                <div className="totalPrice-price">
                    <span className='totalPrice-price_value'>{totalPrice}</span>
                    <span className='totalPrice-price_rouble'> ₽</span>
                </div>
            </div>

        </section>
    )
}

