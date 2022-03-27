import {
    SET_ORDER_STATUS
} from "../actions/actionTypes";

const initialState = {
    orderStatus: 0
};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {

        case SET_ORDER_STATUS:
            return {
                ...state,
                orderStatus: action.payload
            };        
        default:
            return state;
    }
}


