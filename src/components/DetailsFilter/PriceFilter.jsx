import React from 'react';
import { Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../actions/searchingRoute';

export default function PriceFilter(props) {
    const { minPrice, maxPrice } = useSelector(state => state.routes);
    const dispatch = useDispatch();

    const onPriceChange = (value) => {
        dispatch(setFilters({ price_from: value[0], price_to: value[1] }))
    };

    return (
        <div className="Details-PriceFilter">
            <div className="Details-PriceFilter_title">Стоимость</div>
            <div className="Details-PriceFilter-fromTo">
                <span className="fromTo_from">от</span>
                <span className="fromTo_to">до</span>
            </div>
            <Slider
                className="Details-PriceFilter-slider"
                min={minPrice}
                max={maxPrice}
                range={{ draggableTrack: true }}
                tooltipVisible
                tooltipPlacement="bottom"
                onChange={onPriceChange}
            />
            <div className="Details-PriceFilter-price">
                <span className="price-min">{minPrice === -Infinity ? null : minPrice}</span>
                <span className="price-max">{maxPrice}</span>
            </div>
        </div>
    )
};
