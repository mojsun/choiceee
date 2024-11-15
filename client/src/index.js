import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./scss/bootstrap.scss";
import "./scss/fontawesom.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
