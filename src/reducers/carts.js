import { GET_CART_ITEMS, ADD_TO_CART } from "../actions/types";

const initialState = {
  carts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        carts: action.payload
      };
    case ADD_TO_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload]
      };
    default:
      return state;
  }
};
