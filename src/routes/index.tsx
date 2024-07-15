import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./../App";
import { paths } from "./../constants";
// import { About, Home } from "./../pages";
import { lazy } from "react";

// const MarkdownPreview = ;
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Navigate to={paths.home.value} replace />,
        },
        {
          path: paths.aboutUs.value,
          Component: lazy(() => import("./../pages/About/About")),
        },
        {
          path: paths.home.value,
          element: <Navigate to={paths.home.value} replace />,
          Component: lazy(() => import("../pages/Home/Home")),
          index: true,
        },
        {
          path: paths.workFlow.value,
          Component: lazy(() => import("../pages/WorkFlow/WorkFlow")),
        },
        {
          path: paths.catalog.value,
          Component: lazy(() => import("../pages/Catalog/Catalog")),
        },
        { path: "*", element: <Navigate to={paths.home.value} replace /> },
      ],
    },
  ],
  { basename: "/" }
);
export { router };
