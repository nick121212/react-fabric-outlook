import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import "./style";

import "./fabric";

ReactDOM.render((
  <Provider store={store}>
    {router}
  </Provider>),
  document.getElementById("root"),
  () => {
    console.log("dom ready1");
  });

  registerServiceWorker();
