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


} from "../actions/actionTypes";

const initialState = {
    loading: false,
    error: null,
    ticketsQuantity: 0,
    passengersAge: {
        adult: 0,
        child: 0,
        infant: 0
    },
    availableSeats: null,
    currentCarType: undefined,
    currentCoach: undefined,
    selectedSeats: [],
    totalPrice: 0
};

export default function ticketsReducer(state = initialState, action) {
    switch (action.type) {

        case SET_TICKETS_QUANTITY:
            // const { ticketsQuantity } = action.payload;
            return {
                ...state,
                ticketsQuantity: action.payload
            };
        case CLEAR_TICKETS_QUANTITY:
            return {
                ...state,
                ticketsQuantity: initialState.ticketsQuantity
            };
        case GET_AVAILABLE_SEATS:
            return {
                ...state,
                availableSeats: action.payload
            }
        case SET_CAR_TYPE:
            return {
                ...state,
                currentCarType: action.payload
            }
        case SET_CURRENT_COACH:
            return {
                ...state,
                currentCoach: action.payload
            }
        case CLEAR_CURRENT_COACH:
            return {
                ...state,
                currentCoach: initialState.currentCoach
            }
        case SET_SELECTED_SEATS:
            return {
                ...state,
                selectedSeats: action.payload
            }
        case CLEAR_SELECTED_SEATS:
            return {
                ...state,
                currentCoach: initialState.selectedSeats
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        case SET_PASSENGERS_AGE:
            return {
                ...state,
                passengersAge: action.payload
            }

        default:
            return state;
    }
}


