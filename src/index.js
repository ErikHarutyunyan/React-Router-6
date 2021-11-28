import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    {/* BrowserRouter պետքա լինի գլխավոր ծնողը մեր հավելվածի(app-ի) և այն թույլ է տալի անել routing մեր app-ի մեջ*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
