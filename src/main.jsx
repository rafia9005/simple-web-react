import "./index.css";
import "./mode.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(
  {
    once: true
  }
);
// pages
import Index from "./pages/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
