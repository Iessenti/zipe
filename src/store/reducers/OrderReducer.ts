import { OrderActionTypes, OrderState, OrderAction } from "../types/order";

const initialState: OrderState = {
    orders_list: [],
    current_order: null,
    loading: false,
    error: null
}

export const OrderReducer = (state = initialState, action: OrderAction): OrderState => {
    switch(action.type) {
        case OrderActionTypes.FETCH_ORDERS:
            return { ...state, orders_list: [], loading: true, error: null }

        case OrderActionTypes.FETCH_ORDERS_SUCCESS:
            return { ...state, orders_list: action.payload, loading: false, error: null }

        case OrderActionTypes.FETCH_ORDERS_ERROR:
            return { ...state, orders_list: [], loading: false, error: action.payload }

        case OrderActionTypes.FETCH_ORDER:
            return { ...state, current_order: null, loading: true, error: null }

        case OrderActionTypes.FETCH_ORDER_SUCCESS:
            return { ...state, current_order: action.payload, loading: false, error: null }

        case OrderActionTypes.FETCH_ORDER_ERROR:
            return { ...state, current_order: null, loading: false, error: action.payload }

        case OrderActionTypes.RESET_ORDER:
            return { ...initialState }

        default:
            return state;
    }
}