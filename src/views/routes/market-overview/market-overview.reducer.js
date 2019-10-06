import {
  GET_MARKET_OVERVIEW_SUCCESS,
  GET_MARKET_OVERVIEW_ERROR
} from "./market-overview.actionTypes";

export const initialState = {
  list: [],
  message: {}
};

export function marketOverviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MARKET_OVERVIEW_SUCCESS:
      return Object.assign({}, state, action.payload);
    case GET_MARKET_OVERVIEW_ERROR:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
