import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/normalize.css/normalize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contribute from "./Contribute";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
