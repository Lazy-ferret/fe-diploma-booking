import {
    SET_ORDER_STATUS,
   
} from "./actionTypes";

export const setOrderStatus = (status) => ({
    type: SET_ORDER_STATUS, payload: Number(status)
});

