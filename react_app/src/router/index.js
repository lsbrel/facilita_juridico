import { createBrowserRouter } from "react-router-dom";
import User from "../views/user/User";
import MainLayout from "../layout/MainLayout";
import Home from "../views/home/Home";
import CalculateRoute from "../views/route/CalculateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "route",
        element: <CalculateRoute />,
      },
    ],
  },
]);

export default router;
