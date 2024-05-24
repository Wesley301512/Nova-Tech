import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Contato from "./pages/Contato";
import Nos from "./pages/Nos";
import Sobre from "./pages/Sobre";
import IAExperiment from "./pages/IAExperiment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"contato",
    element:<Contato/>
  },
  {
    path:"nos",
    element:<Nos/>
  },
  {
    path:"sobre",
    element:<Sobre/>
  },
  {
    path:"iaexperiment",
    element:<IAExperiment/>

  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

