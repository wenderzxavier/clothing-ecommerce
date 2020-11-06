import { UserState, UserActionsTypes, SET_CURRENT_USER } from "./user.types";

const INITIAL_STATE: UserState = {
  currentUser: undefined
};

const userReducer = (state = INITIAL_STATE, action: UserActionsTypes): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  };
};

export default userReducer;