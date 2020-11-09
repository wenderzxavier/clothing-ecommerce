import { Item } from "../../components/collection-item/collection-item.component";
import * as cartTypes from "./cart.types";

export const toggleCartHidden = (): cartTypes.CartActionsTypes => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: Item): cartTypes.CartActionsTypes => ({
  type: cartTypes.ADD_ITEM,
  payload: item
})

export const clearItemFromCart = (item: Item): cartTypes.CartActionsTypes => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = (item: Item): cartTypes.CartActionsTypes => ({
  type: cartTypes.REMOVE_ITEM,
  payload: item
});