import { combineReducers } from "redux";

import { UserReducer } from "./UserReducer";
import { OrderReducer } from "./OrderReducer";
import { PopupReducer } from "./PopupReducer";

const rootReducer = combineReducers({
    user: UserReducer,
    order: OrderReducer,
    popup: PopupReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer };