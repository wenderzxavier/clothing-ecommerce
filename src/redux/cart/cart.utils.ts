import { Item } from "../../components/collection-item/collection-item.component";

interface CartItems extends Item {
  quantity: number
}

export const addItemToCart = (cartItems: CartItems[], cartItemToAdd: Item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItemToAdd, quantity: cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}