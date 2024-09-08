import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Login from "../pages/Login";

import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import { RoutesCreator } from "../utils/RoutesCreator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: RoutesCreator(adminPaths),
  },
  {
    path: "/user",
    element: <App />,
    children: RoutesCreator(userPaths),
  },
  {
    path: "login",
    element: <Login />,
  },
]);
