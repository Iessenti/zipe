import { combineReducers } from "redux";

import { UserReducer } from "./UserReducer";
import { OrderReducer } from "./OrderReducer";

const rootReducer = combineReducers({
    user: UserReducer,
    order: OrderReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer };