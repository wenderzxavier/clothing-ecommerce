import { Item } from "../../components/collection-item/collection-item.component";

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM';

interface ToggleCartHidden {
  type: typeof TOGGLE_CART_HIDDEN,
}

interface AddItem {
  type: typeof ADD_ITEM,
  payload: Item
}

interface ClearItemFromCart {
  type: typeof CLEAR_ITEM_FROM_CART,
  payload: Item
}

interface RemoveItem {
  type: typeof REMOVE_ITEM,
  payload: Item
}

export interface CartStoreItem extends Item {
  quantity: number
}

export type CartActionsTypes = ToggleCartHidden | AddItem | ClearItemFromCart | RemoveItem;

export interface CartState {
  hidden: boolean,
  cartItems: CartStoreItem[]
}