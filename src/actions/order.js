import {
    SET_ORDER_STATUS,
    SET_PASSENGERS_LIST,
    SET_USER_DATA,
    SET_ORDER_SUCCESS
} from "./actionTypes";

export const setOrderStatus = (status) => ({
    type: SET_ORDER_STATUS, payload: Number(status)
});

export const setPassengersList = (passenger) => ({
    type: SET_PASSENGERS_LIST, payload: passenger
});

export const setUser = (userData) => ({
    type: SET_USER_DATA, payload: { userData }
});

export const setOrderSuccess = (value) => ({
    type: SET_ORDER_SUCCESS, payload: value
});
