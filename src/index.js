import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const GlobalStyle = createGlobalStyle`
/* reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
};
body {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.2;
  color: #000;
}
`;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
