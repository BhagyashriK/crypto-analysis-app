import axios from "axios";
import qs from "querystring";

import { showLoader, hideLoader } from "../../components/loader/loader.action";

import {
  GET_LIQUIDITY_ANALYSIS_SUCCESS,
  GET_LIQUIDITY_ANALYSIS_ERROR
} from "./liquidity-analysis.actionTypes";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getLiquidityAnalysis = params => dispatch => {
  showLoader(dispatch);
  return axios
    .get(`${API_BASE_URL}liquiditystats?${qs.stringify(params)}`)
    .then(({ data }) => {
      const message =
        data.data.length > 0
          ? {}
          : { type: "info", text: "No Liquidity Details Found" };
      hideLoader(dispatch);
      dispatch({
        type: GET_LIQUIDITY_ANALYSIS_SUCCESS,
        payload: { list: data.data, message }
      });
    })
    .catch(error => {
      hideLoader(dispatch);
      dispatch({
        type: GET_LIQUIDITY_ANALYSIS_ERROR,
        payload: {
          list: [],
          message: {
            type: "error",
            text: error.response
              ? error.response.data.error_message
              : error.message
          }
        }
      });
    });
};
