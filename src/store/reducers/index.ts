import { combineReducers } from "redux";

import { UserReducer } from "./UserReducer";
import { OrderReducer } from "./OrderReducer";
import { PopupNotificationsReducer } from "./PopupNotificationsReducer";
import { PopupProfileReducer } from "./PopupProfileReducer";
import { OrderUIReducer } from "./OrderUIReducer";
import { WalletReducer } from './WalletReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    order: OrderReducer,
    orderUI: OrderUIReducer,
    popupProfile: PopupProfileReducer,
    popupNotifications: PopupNotificationsReducer,
    wallet: WalletReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer };