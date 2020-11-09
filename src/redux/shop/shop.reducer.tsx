import SHOP_DATA from "../../pages/shop/shop.data";
import { ShopState } from "./shop.types";

const INITIAL_STATE = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action: any): ShopState => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;