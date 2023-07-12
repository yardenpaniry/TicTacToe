import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
