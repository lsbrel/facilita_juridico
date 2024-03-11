import { createBrowserRouter } from "react-router-dom";
import User from "../views/user/User";
import MainLayout from "../layout/MainLayout";
import Home from "../views/home/Home";
import CalculateRoute from "../views/route/CalculateRoute";
import CreateUser from "../views/user/CreateUser";

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
        path: "list-user",
        element: <User />,
      },
      {
        path: "create-user",
        element: <CreateUser />,
      },
      {
        path: "route",
        element: <CalculateRoute />,
      },
    ],
  },
]);

export default router;
