import React from "react";
import ReactDOM from "react-dom";

/* import routers */
import AppRouter from "./routers/AppRouter";

/* import redux */
import { Provider } from "react-redux";
import store from "./store";

/* import css custom assets */
import "./assets/Custom.css";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
