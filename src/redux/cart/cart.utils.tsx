import { Item } from "../../components/collection-item/collection-item.component";
import { CartStoreItem } from "./cart.types";

export const addItemToCart = (cartItems: CartStoreItem[], cartItemToAdd: Item): CartStoreItem[] => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItemToAdd, quantity: cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems: CartStoreItem[], cartItemToRemove: Item): CartStoreItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem: CartStoreItem): boolean => cartItem.id === cartItemToRemove.id);

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem: CartStoreItem): boolean => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(
    (cartItem: CartStoreItem): CartStoreItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  );
};