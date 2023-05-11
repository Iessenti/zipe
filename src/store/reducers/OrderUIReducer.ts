import { OrderUIState, OrderUIAction, OrderUIActionTypes } from "store/types/orderUI";

const initialState: OrderUIState = {
    activeOrderCreatingStep: 0,
    orderSteps: [
        {
            id: 0,
            title: "Тип заказа",
            isDone: false
        },
        {
            id: 1,
            title: "Категория заказа",
            isDone: false
        },
        {
            id: 2,
            title: "Описание заказа",
            isDone: false
        },
        {
            id: 3,
            title: "Бюджет и сроки",
            isDone: false
        }
    ]
}

export const OrderUIReducer = (state = initialState, action: OrderUIAction): OrderUIState => {
    switch(action.type) {

        case OrderUIActionTypes.CHANGE_STEP:
            return { 
                ...state,
                activeOrderCreatingStep: action.payload, 
                orderSteps: state.orderSteps.map(item => {
                    const resultItem = item;
                    if (resultItem.id < action.payload) resultItem.isDone = true;
                    return resultItem
                }) 
            }

        default:
            return state;
    }
}