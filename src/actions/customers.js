import axios from "../axios";
import { GET_CUSTOMERS } from "./types";

// GET_CUSTOMERS
export const getCustomerData = customerId => dispatch => {
  axios
    .get(`/customers/${customerId}`)
    .then(res => {
      dispatch({ type: GET_CUSTOMERS, payload: res.data.data });
    })
    .catch(err => {
      console.log(`err ${err}`);
    });
};
