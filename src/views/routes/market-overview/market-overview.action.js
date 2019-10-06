import axios from "axios";
import qs from "querystring";

import { showLoader, hideLoader } from "../../components/loader/loader.action";

import {
  GET_MARKET_OVERVIEW_SUCCESS,
  GET_MARKET_OVERVIEW_ERROR
} from "./market-overview.actionTypes";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getMarketOverview = params => dispatch => {
  showLoader(dispatch);
  return axios
    .get(`${API_BASE_URL}coins?${qs.stringify(params)}`)
    .then(({ data }) => {
      const message =
        data.data.length > 0 ? {} : { type: "info", text: "No Records Found" };
      hideLoader(dispatch);
      dispatch({
        type: GET_MARKET_OVERVIEW_SUCCESS,
        payload: { list: data.data, message }
      });
    })
    .catch(error => {
      hideLoader(dispatch);
      dispatch({
        type: GET_MARKET_OVERVIEW_ERROR,
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
