import axios from "../axios";
import { GET_ADDRESSES } from "./types";

export const getCustomerAddress = customerId => dispatch => {
  axios
    .get(`/addresses/${customerId}`)
    .then(res => {
      dispatch({ type: GET_ADDRESSES, payload: res.data.data });
    })
    .catch(err => {
      console.log(`err ${err}`);
    });
};
