/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RouteItem from '../RouteItem/RouteItem';
import './RoutesResult.css';
import { Pagination } from 'antd';
import { setMaxPrice, setMinPrice } from '../../actions/routes';

export default function RoutesResult(props) {
    const { items } = useSelector(state => state.routes.items);
    const { total_count } = useSelector(state => state.routes.items);
    const [showItems, setShowItems] = useState(5);
    const dispatch = useDispatch();

    const getMinPrice = () => {
        let arrMin = [];
        items && items.map((item) => { return arrMin.push(item.min_price) });
        let result = Math.min.apply(null, arrMin);
        return result !== Infinity ? result : 0;
    }

    const getMaxPrice = () => {
        let arrPrices = [];
        const arrValues = [];
        items && items.map((item) => { return arrPrices.push(item.departure.price_info) });
        arrPrices.length > 0 && arrPrices.forEach((type) => {
            const values = Object.values(type);
            values.forEach((value) => {
                if (value !== null) arrValues.push(Math.max.apply(null, Object.values(value)));
            });
        });
        let result = Math.max.apply(null, arrValues);
        return result !== -Infinity ? result : 0;
    };

    useEffect(() => {
        dispatch(setMinPrice(getMinPrice()));
        dispatch(setMaxPrice(getMaxPrice()));
    }, [items]);

    const onClick = (e) => {
        e.target.parentElement.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        setShowItems(e.target.textContent);
    };

    return (
        <section className="Order-Result">
            <div className="Order-Result-header">
                <div className="Result-TotalRoutes">
                    <span>найдено</span>
                    <span className="TotalRoutes_count">{total_count ? total_count : 0}</span>
                </div>
                <div className="Result-nav">
                    <div className="Result-SortItems">
                        <span>сортировать по:</span>
                        <select className='sort_items' name="" id="">
                            <option className='sort_option' value="времени">времени</option>
                            <option className='sort_option' value="стоимости">стоимости</option>
                            <option className='sort_option' value="длительности">длительности</option>
                        </select>
                    </div>

                    <div className="Result-ShowItems">
                        <span>показывать по:</span>
                        <ul className="ShowItems_list">
                            <li className='ShowItems_count active btn' onClick={onClick}>5</li>
                            <li className='ShowItems_count btn' onClick={onClick}>10</li>
                            <li className='ShowItems_count btn' onClick={onClick}>20</li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="Result-Routes-list">
                {items && items.slice(0, showItems).map((item, _id) => {
                    return <RouteItem item={item} key={_id} />
                })
                }
            </ul>

            {total_count && <Pagination
                style={{
                    color: '#928F94'
                }}
                defaultCurrent={1}
                total={total_count * 10 / showItems}
                hideOnSinglePage
            />}
        </section>
    )
};
