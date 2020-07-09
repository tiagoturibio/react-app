import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import usuariosMock from "./mockUsuarios";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./redux";

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));
localStorage.setItem("usuarios", JSON.stringify(usuariosMock));

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
