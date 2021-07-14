import { combineReducers } from "redux";

import { UserReducer } from "./UserReducer";
import { OrderReducer } from "./OrderReducer";
import { PopupReducer } from "./PopupReducer";
import { OrderUIReducer } from "./OrderUIReducer";

const rootReducer = combineReducers({
    user: UserReducer,
    order: OrderReducer,
    orderUI: OrderUIReducer,
    popup: PopupReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer };