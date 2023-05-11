import { ProfileModel } from "./user";

export interface OrderCategoryModel {
    id: string;
    name: string;
}

export interface OrderTypeModel {
    id: number;
    name: string;
    category: OrderCategoryModel[];
}

export interface RepliesModel {
    id: number;
    from_price: number;
    to_price: number;
    from_deadline: string;
    to_deadline: string;
    status: string | null;
    cancel_reason: string | null;
    executor: ProfileModel;
    created: string;
}

export interface TaskFilesModel {
    id: number;
    file: string;
    url: string;
}

export interface OrderResultModel {
    id: number;
    comment: string;
}

export interface OrderModel {
    id: number;
    name: string;
    status: string | null;
    date: string;
    type: OrderTypeModel;
    task: string;
    from_price: number;
    to_price: number;
    category: OrderCategoryModel;
    from_deadline: string;
    to_deadline: string;
    customer: ProfileModel;
    current_reply: RepliesModel | null;
    replies: RepliesModel[];
    task_files: TaskFilesModel[];
    results: OrderResultModel[];
    executor_score: number | null;
    customer_score: number | null;
}

export interface OrderState {
    orders_list: OrderModel[];
    current_order: OrderModel | null;
    loading: boolean;
    error: string | null;
}

export enum OrderActionTypes{
    FETCH_ORDER = 'FETCH_ORDER',
    FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS',
    FETCH_ORDER_ERROR = 'FETCH_ORDER_ERROR',
    FETCH_ORDERS = 'FETCH_ORDERS',
    FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS',
    FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR',
    RESET_ORDER = 'RESET_ORDER'
}

interface FetchOrdersAction {
    type: OrderActionTypes.FETCH_ORDERS;
}

interface FetchOrdersSuccessAction {
    type: OrderActionTypes.FETCH_ORDERS_SUCCESS;
    payload: OrderModel[];
}

interface FetchOrdersErrorAction {
    type: OrderActionTypes.FETCH_ORDERS_ERROR;
    payload: string;
}

interface FetchOrderAction {
    type: OrderActionTypes.FETCH_ORDER;
}

interface FetchOrderSuccessAction {
    type: OrderActionTypes.FETCH_ORDER_SUCCESS;
    payload: OrderModel;
}

interface FetchOrderErrorAction {
    type: OrderActionTypes.FETCH_ORDER_ERROR;
    payload: string;
}

interface ResetOrderAction {
    type: OrderActionTypes.RESET_ORDER;
}


export type OrderAction = FetchOrdersAction | FetchOrdersSuccessAction | FetchOrdersErrorAction |  FetchOrderAction | FetchOrderSuccessAction | FetchOrderErrorAction | ResetOrderAction;