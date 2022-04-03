import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import './SearchForm.css';
import { requestCities } from '../../lib/api';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoutes } from '../../actions/routes';
import { useNavigate } from 'react-router-dom';
import { setDateEnd, setDateStart, setFromCity, setToCity } from '../../actions/searchingRoute';
import { setOrderStatus } from '../../actions/order';
import Loader from '../Loader/Loader';
const { Option } = AutoComplete;

export default function SearchForm(props) {
    const { loading, error } = useSelector(state => state.routes);
    const { dateStart, dateEnd, fromCity, toCity } = useSelector(state => state.searchingRoute);
    const { orderStatus } = useSelector(state => state.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [list, setList] = useState([]);

    const onFromChange = (data) => {
        setFromValue(data);
        requestCities(data)
            .then(resp => setList(resp));
    };

    const onFromSelect = (data) => {
        const selected = list.filter(item => item.name === data);
        const fromCity = { name: selected[0].name, id: selected[0]._id };
        dispatch(setFromCity(fromCity));
    };

    const onToChange = (data) => {
        setToValue(data);
        requestCities(data)
            .then(resp => setList(resp));
    };

    const onToSelect = (data) => {
        const selected = list.filter(item => item.name === data);
        const toCity = { name: selected[0].name, id: selected[0]._id };
        dispatch(setToCity(toCity));
    };

    const onDateStartChange = (date) => {
        dispatch(setDateStart(date));
    };

    const onDateEndChange = (date) => {
        dispatch(setDateEnd(date));
    };

    const onChangeClick = () => {
        let fromToChange = fromValue;
        let toToChange = toValue;
        setFromValue(toToChange);
        setToValue(fromToChange);
    };

    const onSearchFormSubmit = (e) => {
        e.preventDefault();
        const submitData = {
            from_city_id: fromCity.id,
            to_city_id: toCity.id,
            date_start: dateStart ? moment(dateStart).format('YYYY-DD-MM') : '',
            date_end: dateEnd ? moment(dateEnd).format('YYYY-DD-MM') : ''
        };
        dispatch(fetchRoutes(submitData));
        dispatch(setOrderStatus(1));
        navigate('/order');
    };

    const getFormClassName = () => {
        let status = (orderStatus) ? 'Header-SearchForm-Order_container' : '';
        let className = `Header-SearchForm_container ${status}`;
        return className;
    };

    if (loading) {
        return <Loader />
    };
    if (error) {
        return <p>Something went wrong try again</p>;
    };

    return (
        <div className={getFormClassName()}>
            <form className="Header-SearchForm" onSubmit={onSearchFormSubmit}>
                <div className="SearchForm-Section_container">
                    <div className="SearchForm-Section SearchForm_direction">
                        <div className="SearchForm-Section_title">Направление</div>
                        <div className="SearchForm-Input_container">
                            <AutoComplete
                                className="SearchForm-Input Input_direction"
                                placeholder="Откуда"
                                style={{
                                    width: 20 + 'rem'
                                }}
                                value={fromValue}
                                onSelect={onFromSelect}
                                onChange={onFromChange}
                            >
                                {list.length > 0
                                    ? list.map((item) => (
                                        <Option key={item._id} value={item.name}>
                                            {item.name}
                                        </Option>
                                    ))
                                    : null
                                }
                            </AutoComplete>
                            <div className="Input_changeBtn btn" onClick={onChangeClick}></div>
                            <AutoComplete
                                className="SearchForm-Input Input_direction"
                                placeholder="Куда"
                                style={{
                                    width: 20 + 'rem'
                                }}
                                value={toValue}
                                onSelect={onToSelect}
                                onChange={onToChange}
                            >
                                {list.length > 0
                                    ? list.map((item) => (
                                        <Option key={item._id} value={item.name}>
                                            {item.name}
                                        </Option>
                                    ))
                                    : null
                                }
                            </AutoComplete>
                        </div>
                    </div>

                    <div className="SearchForm-Section SearchForm_date">
                        <div className="SearchForm-Section_title">Дата</div>
                        <div className='SearchForm-Input_container'>
                            <DatePicker
                                className="SearchForm-Input Input_date Input_date_start"
                                selected={dateStart}
                                onChange={onDateStartChange}
                                dateFormat="dd.MM.yyyy"
                                placeholderText="ДД/ММ/ГГ"
                                locale={ru}
                            // minDate={new Date()}
                            />
                            <DatePicker
                                className="SearchForm-Input Input_date Input_date_end"
                                selected={dateEnd}
                                onChange={onDateEndChange}
                                dateFormat="dd.MM.yyyy"
                                placeholderText="ДД/ММ/ГГ"
                                locale={ru}
                            // minDate={new Date()}
                            />
                        </div>
                    </div>
                </div>
                <button className="SerchForm-Button btn">Найти билеты</button>
            </form>
        </div>
    )
};
