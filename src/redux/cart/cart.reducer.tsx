import { ADD_ITEM, CartActionsTypes, CartState, TOGGLE_CART_HIDDEN } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action: CartActionsTypes): CartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  };
};

export default cartReducer;