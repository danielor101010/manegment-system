import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import WorkerDashboard from "../pages/workerDashboard/WorkerDashboard";
import AdminDashboard from "../pages/adminDashboard/AdminDahsboard";

function Router() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/workerDashboard", element: <WorkerDashboard /> },
    { path: "/adminDashboard", element: <AdminDashboard /> }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
