import { SET_CURRENT_USER, UserActionsTypes } from "./user.types";

export const setCurrentUser = (user: string): UserActionsTypes => ({
  type: SET_CURRENT_USER,
  payload: user
});
