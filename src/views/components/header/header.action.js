import { CHANGE_LIMIT } from "./header.actionTypes";

export const changeLimit = limit => dispatch => {
  dispatch({ type: CHANGE_LIMIT, payload: { limit } });
};
