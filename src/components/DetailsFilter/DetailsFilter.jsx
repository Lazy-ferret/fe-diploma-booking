import React from 'react';
import DateFilter from './DateFilter';
import TimeFilter from './TimeFilter';
import './DetailsFilter.css';
import FeaturesFilter from './FeaturesFilter';
import PriceFilter from './PriceFilter';
import { Collapse } from 'antd';

export default function DetailsFilter(props) {
    const { Panel } = Collapse;

    return (
        <section className="Details Details-FilterRoutes">
            <DateFilter />
            <FeaturesFilter />
            <PriceFilter />

            <Collapse
                ghost
                expandIconPosition="right"
                expandIcon={null} >
                <Panel
                    showArrow={false}
                    header={
                        <div className="Details-Direction forward-direction">
                            <div className="Details-Direction-Icon forward-direction"></div>
                            <div className="Details-Direction_title">Туда</div>
                            <div className="Details-Direction-btn dropdown-btn"></div>
                        </div>
                    }
                    key="1">
                    <TimeFilter type='start' />
                </Panel>
                <Panel
                    showArrow={false}
                    header={
                        <div className="Details-Direction backward-direction">
                            <div className="Details-Direction-Icon backward-direction"></div>
                            <div className="Details-Direction_title">Обратно</div>
                            <div className="Details-Direction-btn dropdown-btn"></div>
                        </div>
                    }
                    key="2">
                    <TimeFilter type='end' />
                </Panel>
            </Collapse>
        </section>
    )
};
