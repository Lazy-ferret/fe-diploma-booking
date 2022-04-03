import React from 'react';
import { featuresFilterList } from '../../lib/const';
import { Switch } from 'antd';
import './DetailsFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../actions/searchingRoute';

export default function FeaturesFilter() {
    const { filters } = useSelector(state => state.searchingRoute);
    const dispatch = useDispatch();

    const onFilterChange = (filter, state) => {
        dispatch(setFilters({ [filter]: state }))
    };

    return (
        <div className="Details-DetailsFilter">
            <ul className="DetailsFilter-List">
                {featuresFilterList.map(item => {
                    return (<li className="DetailsFilter-Item" key={item.name}>
                        <div className="DetailsFilter-Item-Icon">
                            <img src={item.src} alt={item.alt} className="Icon_image" />
                        </div>
                        <span className="DetailsFilter-Item-Title">{item.title}</span>

                        <Switch
                            filter={item.name}
                            checked={filters[item.name]}
                            onChange={(state) => {
                                onFilterChange(item.name, state)
                            }}
                        />
                    </li>)
                })
                }
            </ul>
        </div>
    )
};
