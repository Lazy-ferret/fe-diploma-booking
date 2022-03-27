import { requestSeats } from "../lib/api";
import {
    SET_TICKETS_QUANTITY,
    CLEAR_TICKETS_QUANTITY,
    GET_AVAILABLE_SEATS, 
    SET_CAR_TYPE, 
    SET_CURRENT_COACH, 
    CLEAR_CURRENT_COACH,
    SET_SELECTED_SEATS, 
    CLEAR_SELECTED_SEATS,
    SET_TOTAL_PRICE, 
    SET_PASSENGERS_AGE
    
} from "./actionTypes";

export const setTicketsQuantity = (quantity) => ({
    type: SET_TICKETS_QUANTITY, payload: quantity
});

export const clearTicketsQuantity = () => ({
    type: CLEAR_TICKETS_QUANTITY 
});

export const getAvailableSeats = (id, filters) => async dispatch => {
   
            const data = await requestSeats(id, filters);
        dispatch({
            type: GET_AVAILABLE_SEATS, payload: {data}
        });
    
};

export const setCarType = (type) => ({
    type: SET_CAR_TYPE, payload: type
});

export const setCurrentCoach = (coach) => ({
    type: SET_CURRENT_COACH, payload: {coach}
});

export const clearCurrentCoach = () => ({
    type: CLEAR_CURRENT_COACH
});

export const setSelectedSeats = (seatNumber) => ({
    type: SET_SELECTED_SEATS, payload: seatNumber
});

export const clearsetSelectedSeats = () => ({
    type: CLEAR_SELECTED_SEATS 
});

export const setTotalPrice = (price) => ({
    type: SET_TOTAL_PRICE, payload: price
});

export const setPassengersAge = (adult, child, infant) => ({
    type: SET_PASSENGERS_AGE, payload: {adult: adult, child: child, infant: infant}
});


