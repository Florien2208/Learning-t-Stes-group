
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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