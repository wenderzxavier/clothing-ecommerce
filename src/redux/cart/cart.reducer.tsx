import { CartActionsTypes, CartState, TOGGLE_CART_HIDDEN } from "./cart.types";

const INITIAL_STATE: CartState = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action: CartActionsTypes): CartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  };
};

export default cartReducer;