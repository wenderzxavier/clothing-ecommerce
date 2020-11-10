import { createSelector } from "reselect";
import { RootState } from "../root-reducer";
import { Collection, ShopCollections, ShopState } from "./shop.types";

const selectShop = (state: RootState): ShopState => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState): ShopCollections => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    (collections: ShopCollections): Collection => collections[collectionUrlParam]
  )

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map(key => collections[key])
)