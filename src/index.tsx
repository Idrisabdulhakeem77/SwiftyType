import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./app/App";

import { Provider } from "react-redux";

import { HashRouter, Route, Routes } from "react-router-dom";
import store from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
