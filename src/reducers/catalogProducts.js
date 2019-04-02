import { GET_CATALOGPRODUCTS } from "../actions/types";

const initialState = {
  catalogProducts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOGPRODUCTS:
      return {
        ...state,
        catalogProducts: action.payload
      };
    default:
      return state;
  }
};
