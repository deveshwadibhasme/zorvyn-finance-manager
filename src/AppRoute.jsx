import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screen/main/Dashboard";
import AppLayout from "./AppLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
