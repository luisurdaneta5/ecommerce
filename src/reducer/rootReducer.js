import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { itemReducer } from "./itemReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	shoppingcart: itemReducer,
});
