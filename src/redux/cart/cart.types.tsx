import { Item } from "../../components/collection-item/collection-item.component";

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';

interface ToggleCartHidden {
  type: typeof TOGGLE_CART_HIDDEN,
}

interface AddItem {
  type: typeof ADD_ITEM,
  payload: Item
}

export interface CartStoreItem extends Item {
  quantity: number
}

export type CartActionsTypes = ToggleCartHidden | AddItem;

export interface CartState {
  hidden: boolean,
  cartItems: CartStoreItem[]
}