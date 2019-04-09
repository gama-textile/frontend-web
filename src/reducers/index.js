import { combineReducers } from "redux";
import catalogProductsReducers from "./catalogProducts";
import addressReducers from "./address";
import customerReducers from "./customers";
import cartsReducers from "./carts";

export default combineReducers({
  catalogProductsReducers,
  addressReducers,
  customerReducers,
  cartsReducers
});
