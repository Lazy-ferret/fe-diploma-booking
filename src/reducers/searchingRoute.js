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
    CLEAR_FILTERS
} from "../actions/actionTypes";

const initialState = {
    fromCity: { name: '', id: '' },
    toCity: { name: '', id: '' },
    dateStart: '',
    dateEnd: '',
    filters: {
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: true,
        is_express: false,
        price_from: 0,
        price_to: 10000,
        start_departure_hour_from: '',
        start_departure_hour_to: '',
        start_arrival_hour_from: '',
        start_arrival_hour_to: '',
        end_departure_hour_from: '',
        end_departure_hour_to: '',
        end_arrival_hour_from: '',
        end_arrival_hour_to: '',
    }
};

export default function searchingRouteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FROM_CITY:
            const { fromCity } = action.payload;
            return {
                ...state,
                fromCity
            };
        case CLEAR_FROM_CITY:
            return {
                ...state,
                fromCity: initialState.fromCity
            };
        case SET_TO_CITY:
            const { toCity } = action.payload;
            return {
                ...state,
                toCity
            };
        case CLEAR_TO_CITY:
            return {
                ...state,
                toCity: initialState.toCity
            };
        case SET_DATE_START:
            const { dateStart } = action.payload;
            return {
                ...state,
                dateStart
            };
        case CLEAR_DATE_START:
            return {
                ...state,
                dateStart: initialState.dateStart
            };
        case SET_DATE_END:
            const { dateEnd } = action.payload;
            return {
                ...state,
                dateEnd
            };
        case CLEAR_DATE_END:
            return {
                ...state,
                dateEnd: initialState.dateEnd
            };
        case SET_FILTERS:
            return {
                ...state,
                filters: { ...state.filters, ...action.payload }
            };
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: initialState.filters
            };
        default:
            return state;
    }
};
