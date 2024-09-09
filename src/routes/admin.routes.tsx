import AdminDashboard from "../pages/admin/AdminDashboard";

import AddFacility from "../pages/admin/AddFacility";

import ViewBookings from "../pages/admin/ViewBookings";

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
  {
    name: "Bookings",
    children: [
      {
        name: "Bookings",
        path: "bookings",
        element: <ViewBookings />,
      },
    ],
  },
];
