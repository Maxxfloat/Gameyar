import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss";
import App from "./Components/Containers/App";
import reducer from "./Components/Reducers/sidebarReducer";
import { createStore } from "redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
