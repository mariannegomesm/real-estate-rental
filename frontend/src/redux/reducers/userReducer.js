import * as Action from "../constants";

const INITIAL_STATE = {
};

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Action.SAVE_USER_DETAILS:
      return { ...state, ...action.payload }; 

    case Action.REMOVE_USER_SAVED:
      return INITIAL_STATE;

    default:
      return state;
  }
}