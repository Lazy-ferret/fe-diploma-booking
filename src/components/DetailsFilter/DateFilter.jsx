import React, { useEffect } from 'react';
import './DetailsFilter.css';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { fetchRoutes } from '../../actions/routes';
import { setDateEnd, setDateStart } from '../../actions/searchingRoute';

export default function DateFilter(props) {
    const { dateStart, dateEnd, fromCity, toCity } = useSelector(state => state.searchingRoute);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dateStart || dateEnd) {
            const submitData = {
                from_city_id: fromCity.id,
                to_city_id: toCity.id,
                date_start: dateStart ? moment(dateStart).format('YYYY-DD-MM') : '',
                date_end: dateEnd ? moment(dateEnd).format('YYYY-DD-MM') : ''
            }
            dispatch(fetchRoutes(submitData));
        }
    }, [dateStart, dateEnd, fromCity.id, toCity.id, dispatch]);

    const onDateStartChange = (date) => {
        dispatch(setDateStart(date))
    };

    const onDateEndChange = (date) => {
        dispatch(setDateEnd(date))
    };

    return (
        <div className="Details-DateFilter">
            <div className="DateFilter-Input_container departure_date">
                <div className="DateFilter-Input_title">Дата поездки</div>
                <DatePicker
                    className="DateFilter-Input Input_departure_date"
                    selected={dateStart}
                    onChange={onDateStartChange}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="ДД/ММ/ГГ"
                    locale={ru}
                // minDate={new Date()}
                />
            </div>
            <div className="DateFilter-Input_container return_date">
                <div className="DateFilter-Input_title">Дата возвращения</div>
                <DatePicker
                    className="DateFilter-Input Input_return_date"
                    selected={dateEnd}
                    onChange={onDateEndChange}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="ДД/ММ/ГГ"
                    locale={ru}
                // minDate={new Date()}
                />
            </div>
        </div>
    )
};
