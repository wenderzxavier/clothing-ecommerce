import { CartActionsTypes, TOGGLE_CART_HIDDEN } from "./cart.types";

export const toggleCartHidden = (): CartActionsTypes => ({
  type: TOGGLE_CART_HIDDEN,
});
