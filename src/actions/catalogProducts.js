import axios from "../axios";

import { GET_CATALOGPRODUCTS } from "./types";

export const getCatalogProducts = () => dispatch => {
  axios
    .get(`/catalog-products`)
    .then(res => {
      dispatch({
        type: GET_CATALOGPRODUCTS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
