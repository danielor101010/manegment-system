import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login";


function Router() {
  const router = createBrowserRouter(
    [
      { path: "/login", element: <Login /> }
 
    ]
  );
  return (
    <RouterProvider router={router} />
  );
}

export default Router;