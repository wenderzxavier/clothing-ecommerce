import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";

import userReducer from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>;