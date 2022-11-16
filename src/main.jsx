import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>NFT Preview card component</h1>
    <App />
    <h3>
      <a href="https://github.com/haakonmydland" target="__blank">
        Made by Haakon Mydland
      </a>
    </h3>
  </React.StrictMode>
);
