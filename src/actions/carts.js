import axios from "../axios";

import { GET_CART_ITEMS, ADD_TO_CART } from "./types";

// GET ALL PRODUCT
export const getProductsInCart = () => dispatch => {
  axios
    .get(`/carts`)
    .then(res => {
      dispatch({ type: GET_CART_ITEMS, payload: res.data.data });
    })
    .catch(err => {
      console.log(`err ${err}`);
    });
};

// ADD PRODUCT TO CART
export const addProductToCart = cart => dispatch => {
  axios
    .post(`/carts`, cart)
    .then(res => {
      dispatch({ type: ADD_TO_CART, payload: res.data.data });
    })
    .catch(err => {
      console.log(`err ${err}`);
    });
};
