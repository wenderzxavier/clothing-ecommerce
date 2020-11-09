import { createSelector } from "reselect";
import { RootState } from "../root-reducer";
import { UserState } from "./user.types";

const selectUser = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: UserState): string | undefined => user.currentUser
);