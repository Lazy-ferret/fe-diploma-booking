import React from 'react'
import DateFilter from './DateFilter';
import './DetailsFilter.css';
import FeaturesFilter from './FeaturesFilter';
import PriceFilter from './PriceFilter';

export default function DetailsFilter(props) {
    
    

    return (
        <section className="Details Details-FilterRoutes">

            <DateFilter />
            <FeaturesFilter />
            <PriceFilter />

        </section>

    )
}
