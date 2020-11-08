import { Item } from "../../components/collection-item/collection-item.component";
import { CartStoreItem } from "./cart.types";

export const addItemToCart = (cartItems: CartStoreItem[], cartItemToAdd: Item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItemToAdd, quantity: cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}