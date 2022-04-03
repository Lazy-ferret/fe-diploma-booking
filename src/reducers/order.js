import {
    SET_ORDER_STATUS,
    SET_PASSENGERS_LIST,
    SET_USER_DATA,
    SET_ORDER_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    orderStatus: 0,
    passengers: [],
    user: null,
    orderSuccess: false
};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ORDER_STATUS:
            return {
                ...state,
                orderStatus: action.payload
            };
        case SET_PASSENGERS_LIST:
            return {
                ...state,
                passengers: action.payload
            };
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload
            };
        case SET_ORDER_SUCCESS:
            return {
                ...state,
                orderSuccess: action.payload
            };
        default:
            return state;
    }
}
