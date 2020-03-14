import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import UserProvider from "./context";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <Root />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
