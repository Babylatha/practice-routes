import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Page1 from "../Pages/Page1/page1";
import Page2 from "../Pages/Page2/page2";
import Page3 from "../Pages/Page3/page3";
import Page4 from "../Pages/Page4/page4";
import LoginPage from "../Pages/Login/LoginPage";
import Layout from "../Layout/Layout";
import LogIn from "../Pages/Login/LoginPage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "",
      element: <LogIn />,
    },
    {
      path: "/layout",
      element: <Layout />,
      children: [
        { element: <Navigate to="page1" />, index: true },
        {
          path: `page1`,
          element: <Page1 />,
        },
        {
          path: `page2`,
          element: <Page2 />,
        },
        {
          path: `page3`,
          element: <Page3 />,
        },
        {
          path: `page4`,
          element: <Page4 />,
        },
      ],
    },
  ]);
  return routes;
}
