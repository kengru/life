import React from 'react'
import ReactDOM from 'react-dom/client'
import GoogleFontLoader from "react-google-font-loader";
import { App } from './App.tsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
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
