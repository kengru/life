import React from "react";
import ReactDOM from "react-dom/client";
import GoogleFontLoader from "react-google-font-loader";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Home.tsx";

import "./index.css";
import { Life } from "./containers/Life/Life";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/life2",
    element: <Life />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleFontLoader
      fonts={[
        {
          font: "Source Code Pro",
          weights: [300, 400, 500, 600, 700, 800]
        }
      ]}
    />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
