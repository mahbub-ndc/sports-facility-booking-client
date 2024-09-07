import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { adminRoutes } from "./admin.routes";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "admin",
        element: <AdminDashboard />,
        children: adminRoutes,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
