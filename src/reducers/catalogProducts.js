import { GET_CATALOGPRODUCTS, GET_CATALOGPRODUCT } from "../actions/types";

const initialState = {
  catalogProducts: [],
  catalogProduct: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOGPRODUCTS:
      return {
        ...state,
        catalogProducts: action.payload
      };
    case GET_CATALOGPRODUCT:
      return {
        ...state,
        catalogProduct: action.payload
      };
    default:
      return state;
  }
};
