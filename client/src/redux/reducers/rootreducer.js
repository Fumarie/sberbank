import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { profileReducer } from "./profileReducer";

export const rootReducer = combineReducers({products: productsReducer, profile: profileReducer})