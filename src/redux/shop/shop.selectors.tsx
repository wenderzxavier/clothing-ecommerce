import { createSelector } from "reselect";
import { RootState } from "../root-reducer";
import { Collection, ShopState } from "./shop.types";

const selectShop = (state: RootState): ShopState => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState): Collection[] => shop.collections
);