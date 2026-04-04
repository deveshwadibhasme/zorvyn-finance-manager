import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screen/main/Dashboard";
import AppLayout from "./AppLayout";
import Transaction from "./screen/main/Transaction";
import Insights from "./screen/main/Insights";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/transactions",
        element: <Transaction />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
    ],
  },
]);
