import { requestRoutes } from "../lib/api";
import {
    FETCH_ROUTES_REQUEST,
    FETCH_ROUTES_FAILURE,
    FETCH_ROUTES_SUCCESS,
    SET_MIN_PRICE,
    SET_MAX_PRICE,
    SET_CURRENT_ROUTE,
    CLEAR_CURRENT_ROUTE
} from "./actionTypes";

export const fetchRoutesRequest = () => ({
    type: FETCH_ROUTES_REQUEST,
});

export const fetchRoutesFailure = (error) => ({
    type: FETCH_ROUTES_FAILURE,
    payload: {
        error
    }
});

export const fetchRoutesSuccess = (items, total_count) => ({
    type: FETCH_ROUTES_SUCCESS,
    payload: {
        items,
        total_count
    }
});

export const fetchRoutes = (params) => async dispatch => {
    dispatch(fetchRoutesRequest());
    try {
        const data = await requestRoutes(params);
        dispatch(fetchRoutesSuccess(data));
    } catch (e) {
        dispatch(fetchRoutesFailure(e.message));
    }
};

export const setMinPrice = (minPrice) => ({
    type: SET_MIN_PRICE, payload: { minPrice }
});

export const setMaxPrice = (maxPrice) => ({
    type: SET_MAX_PRICE, payload: { maxPrice }
});

export const setCurrentRoute = (currentRoute) => ({
    type: SET_CURRENT_ROUTE, payload: { currentRoute }
});

export const clearCurrentRoute = () => ({
    type: CLEAR_CURRENT_ROUTE
});
