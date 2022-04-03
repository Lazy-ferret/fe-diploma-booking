import {
    FETCH_ROUTES_REQUEST,
    FETCH_ROUTES_FAILURE,
    FETCH_ROUTES_SUCCESS,
    SET_MIN_PRICE,
    SET_MAX_PRICE,
    SET_CURRENT_ROUTE,
    CLEAR_CURRENT_ROUTE,
} from "../actions/actionTypes";

const initialState = {
    items: [],
    loading: false,
    error: null,
    currentRoute: null,
    minPrice: 0,
    maxPrice: 0
};

export default function routesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ROUTES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ROUTES_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error
            };
        case FETCH_ROUTES_SUCCESS:
            const { items } = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null,
            };

        case SET_MIN_PRICE:
            const { minPrice } = action.payload;
            return {
                ...state,
                minPrice
            };
        case SET_MAX_PRICE:
            const { maxPrice } = action.payload;
            return {
                ...state,
                maxPrice
            };

        case SET_CURRENT_ROUTE:
            const { currentRoute } = action.payload;
            return {
                ...state,
                currentRoute
            };
        case CLEAR_CURRENT_ROUTE:
            return {
                ...state,
                currentRoute: null
            };
        default:
            return state;
    }
}
