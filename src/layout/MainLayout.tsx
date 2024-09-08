import { Button, Layout } from "antd";

import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/auth/AuthSlice";
import { toast } from "sonner";
const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logged Out", { duration: 2000 });
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />

      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            paddingRight: "35px",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button onClick={handleLogOut}>LogOut</Button>
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
