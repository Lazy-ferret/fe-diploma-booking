import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { Input, AutoComplete } from 'antd';

import 'antd/dist/antd.css';

import './SearchForm.css';
import { requestCities, requestLastRoutes, requestRoutes } from '../../lib/api';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoutes, setSearchingRoute } from '../../actions/routes';
import { useNavigate } from 'react-router-dom';
import { clearFromCity, clearToCity, setDateEnd, setDateStart, setFromCity, setToCity } from '../../actions/searchingRoute';
const { Option } = AutoComplete;

export default function SearchForm(props) {
    const { loading, error } = useSelector(state => state.routes);
    const { dateStart, dateEnd, fromCity, toCity } = useSelector(state => state.searchingRoute);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const initialState = {
    //     fromCity: { name: '', id: '' },
    //     toCity: {},
    //     dateStart: '',
    //     dateEnd: ''
    // }
    // const [state, setState] = useState(initialState);

    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [list, setList] = useState([]);

    // const [dateStart, setDateStart] = useState(null);
    // const [dateEnd, setDateEnd] = useState(null);


    const onFromChange = (data) => {
        setFromValue(data);
        requestCities(data)
            .then(resp => setList(resp));
    };

    const onFromSelect = (data) => {
        const selected = list.filter(item => item.name === data)
        const fromCity = { name: selected[0].name, id: selected[0]._id }
        dispatch(setFromCity(fromCity));
    };

    const onToChange = (data) => {
        setToValue(data);
        requestCities(data)
            .then(resp => setList(resp));
    };

    const onToSelect = (data) => {
        const selected = list.filter(item => item.name === data)
        const toCity = { name: selected[0].name, id: selected[0]._id }
        dispatch(setToCity(toCity));
    };


    const onDateStartChange = (date) => {
        dispatch(setDateStart(date))
    }

    const onDateEndChange = (date) => {
        dispatch(setDateEnd(date))
    }

    const onChangeClick = () => {
        let fromToChange = fromValue;
        let toToChange = toValue;
        setFromValue(toToChange);
        setToValue(fromToChange);
    }

    const onSearchFormSubmit = (e) => {
        e.preventDefault();
        const submitData = {
            from_city_id: fromCity.id,
            to_city_id: toCity.id,
            date_start: dateStart ? moment(dateStart).format('YYYY-DD-MM') : '',
            date_end: dateEnd ? moment(dateEnd).format('YYYY-DD-MM') : ''
        }
        dispatch(fetchRoutes(submitData));
        navigate('/order');
    }

    if (loading) {
        return <p>...Loading</p>;;
    };
    if (error) {
        return <p>Something went wrong try again</p>;
    };

    return (

        <div className="Header-SearchForm_container">
            <form className="Header-SearchForm" onSubmit={onSearchFormSubmit}>
                <div className="SearchForm-Section_container">
                    <div className="SearchForm-Section SearchForm_direction">
                        <div className="SearchForm-Section_title">Направление</div>

                        <div className="SearchForm-Input_container">
                            {/* <input type="text" className="SearchForm-Input Input_direction" placeholder="Откуда" /> */}
                            <AutoComplete
                                className="SearchForm-Input Input_direction"
                                placeholder="Откуда"
                                style={{
                                    width: 20 + 'rem'
                                }}
                                value={fromValue}
                                // options={options}
                                onSelect={onFromSelect}
                                // onSearch={onSearch}
                                onChange={onFromChange}

                            // onFocus={onFocus}
                            >
                                {/* <Input className="SearchForm-Input Input_direction" placeholder="Откуда" /> */}
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
                                // options={options}
                                onSelect={onToSelect}
                                // onSearch={onSearch}
                                onChange={onToChange}
                            >
                                {/* <Input className="SearchForm-Input Input_direction" placeholder="Откуда" /> */}
                                {list.length > 0
                                    ? list.map((item) => (
                                        <Option key={item._id} value={item.name}>
                                            {item.name}
                                        </Option>
                                    ))
                                    : null
                                }
                            </AutoComplete>

                            {/* <input type="text" className="SearchForm-Input Input_direction" placeholder="Куда" /> */}


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

    );
}
