import { Item } from "../../components/collection-item/collection-item.component";
import { ADD_ITEM, CartActionsTypes, TOGGLE_CART_HIDDEN } from "./cart.types";

export const toggleCartHidden = (): CartActionsTypes => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item: Item): CartActionsTypes => ({
  type: ADD_ITEM,
  payload: item
})