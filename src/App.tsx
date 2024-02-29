
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Layout from "./component/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> }, 
      { path: "about", element: <About /> }, 
      { path: "login", element: <Login /> },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;