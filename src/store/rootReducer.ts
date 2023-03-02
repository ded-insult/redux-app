import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./addToCart/slice";

export const rootReducer = combineReducers({
  mainReducer: reducer,
});
