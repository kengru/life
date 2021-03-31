import React from "react";
import ReactDOM from "react-dom";
import GoogleFontLoader from "react-google-font-loader";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GoogleFontLoader
      fonts={[
        {
          font: "Source Code Pro",
          weights: [400, 500, 600, 700, 800]
        }
      ]}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
