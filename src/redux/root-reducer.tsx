import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import storage from 'redux-persist/lib/storage';

import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer); 