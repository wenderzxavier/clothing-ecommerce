export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';

interface ToggleCartHidden {
  type: typeof TOGGLE_CART_HIDDEN,
}

export type CartActionsTypes = ToggleCartHidden;

export interface CartState {
  hidden: boolean
}