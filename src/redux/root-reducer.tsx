import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer); 