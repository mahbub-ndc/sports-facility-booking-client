import AdminDashboard from "../pages/admin/AdminDashboard";

import AddFacility from "../pages/admin/AddFacility";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Facility",
    children: [
      {
        name: "Create Facility",
        path: "create-facility",
        element: <AddFacility />,
      },
    ],
  },
];
