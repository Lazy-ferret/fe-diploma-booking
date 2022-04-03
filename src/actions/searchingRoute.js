import {
    SET_FROM_CITY,
    CLEAR_FROM_CITY,
    SET_TO_CITY,
    CLEAR_TO_CITY,
    SET_DATE_START,
    CLEAR_DATE_START,
    SET_DATE_END,
    CLEAR_DATE_END,
    SET_FILTERS,
    CLEAR_FILTERS,
} from "./actionTypes";

export const setFromCity = (fromCity) => ({
    type: SET_FROM_CITY, payload: { fromCity }
});

export const clearFromCity = () => ({
    type: CLEAR_FROM_CITY
});

export const setToCity = (toCity) => ({
    type: SET_TO_CITY, payload: { toCity }
});

export const clearToCity = () => ({
    type: CLEAR_TO_CITY
});

export const setDateStart = (dateStart) => ({
    type: SET_DATE_START, payload: { dateStart }
});

export const clearDateStart = () => ({
    type: CLEAR_DATE_START
});

export const setDateEnd = (dateEnd) => ({
    type: SET_DATE_END, payload: { dateEnd }
});

export const clearDateEnd = () => ({
    type: CLEAR_DATE_END
});

export const setFilters = (filter) => ({
    type: SET_FILTERS,
    payload: filter
});

export const clearFilters = () => ({
    type: CLEAR_FILTERS
});
