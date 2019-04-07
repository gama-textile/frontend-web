import axios from "../axios";

import { GET_CATALOGPRODUCTS, GET_CATALOGPRODUCT } from "./types";

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

export const getSingleCatalogProduct = id => dispatch => {
  axios
    .get(`/catalog-products/${id}/find`)
    .then(res => {
      dispatch({
        type: GET_CATALOGPRODUCT,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
