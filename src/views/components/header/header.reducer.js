import { CHANGE_LIMIT } from "./header.actionTypes";

export const initialState = {
  start: 1,
  limit: 10
};

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LIMIT:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
