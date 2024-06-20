// src/index.js
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";
import "./assets/css/style.css";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
