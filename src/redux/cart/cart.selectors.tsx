import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import { CartState, CartStoreItem } from './cart.types';

const selectCart = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  ((cart: CartState): CartStoreItem[] => cart.cartItems)
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  ((cartItems: CartStoreItem[]): number =>
    cartItems.reduce(
      (accumulatedQuantity: number, cartItem: CartStoreItem): number =>
        accumulatedQuantity + cartItem.quantity
      , 0)
  )
);
