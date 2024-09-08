import CancelBooking from "../pages/user/CancelBooking";
import CreateBooking from "../pages/user/CreateBooking";
import UserDashboard from "../pages/user/UserDashboard";
import ViewBooking from "../pages/user/ViewBooking";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Booking",
        path: "create-booking",
        element: <CreateBooking></CreateBooking>,
      },
      {
        name: "View Booking",
        path: "view-booking",
        element: <ViewBooking></ViewBooking>,
      },
      {
        name: "Cancel Booking",
        path: "cancel-booking",
        element: <CancelBooking></CancelBooking>,
      },
    ],
  },
];
