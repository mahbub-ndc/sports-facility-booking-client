import { Layout, Menu } from "antd";

import { userPaths } from "../routes/user.routes";
import { adminPaths } from "../routes/admin.routes";
import { SidebarCreator } from "../utils/SidebarCreator";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const role = "user";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = SidebarCreator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = SidebarCreator(userPaths, userRole.USER);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Booking App</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
