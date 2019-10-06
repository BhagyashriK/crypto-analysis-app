import {
  GET_LIQUIDITY_ANALYSIS_SUCCESS,
  GET_LIQUIDITY_ANALYSIS_ERROR
} from "./liquidity-analysis.actionTypes";

export const initialState = {
  list: [],
  message: {}
};

export function liquidityAnalysisReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIQUIDITY_ANALYSIS_SUCCESS:
    case GET_LIQUIDITY_ANALYSIS_ERROR:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
