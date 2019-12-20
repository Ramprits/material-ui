import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./app";
import UserProvider from "./context/user.context";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <HashRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </HashRouter>
  </BrowserRouter>,
  rootElement
);
if (module.hot) {
  module.hot.accept();
}
