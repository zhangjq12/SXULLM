import React, { useEffect, useState } from "react";
import { MessageTwoTone, ShopTwoTone, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown, Avatar } from "antd";
// import { AppRoutes } from "../../routes/route";
import { Outlet, useLocation, useNavigate } from "react-router";
import { logout, isMobile } from "../../utils";
const { Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const items = [
  getItem("对话大模型", "/", <MessageTwoTone />),
  getItem("智能体广场", "/agents", <ShopTwoTone />),
  getItem(
    "创建智能体",
    "/developer",
    <CodeOutlined style={{ color: "rgb(23 119 225)" }} />
  ),
];

const dropdownMenuItems = [
  {
    label: "登出",
    key: "1",
    icon: <LogoutOutlined />,
  },
];

export const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["/"]);
  const [user, setUser] = useState(undefined);
  const [color, setColor] = useState("orange");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCollapsed(isMobile() ? true : false);
    setSelectedKeys([location.pathname]);
    setUser(sessionStorage.getItem("userName"));
    setColor("#ffa500");
  }, [location]);

  const menuOnClick = (e) => {
    navigate(e.key);
  };

  return (
    <Layout
      hasSider
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
        style={siderStyle}
      >
        <div style={{ margin: 16, display: "flex", alignItems: "center" }}>
          <img src="/Sxu_logo.png" style={{ height: 45, width: 45 }}></img>
          <span
            style={{
              margin: "0 10px",
              fontSize: 18,
              fontWeight: "bold",
              color: '#042800',
            }}
          >
            {collapsed ? "" : "文瀛学者"}
          </span>
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["/"]}
          selectedKeys={selectedKeys}
          mode="inline"
          items={items}
          onClick={menuOnClick}
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse' }}>
          <Dropdown
            menu={{
              items: dropdownMenuItems,
              onClick: ({ key }) => {
                if (key === "1") {
                  logout();
                }
              },
            }}
            placement="top"
          >
            <Button
              type={"text"}
              block
              style={{
                marginTop: "auto",
                display: "flex",
                alignItems: "center",
              }}
              icon={
                <Avatar
                  style={{
                    backgroundColor: color,
                    color: "white",
                  }}
                >
                  {user && user[0]}
                </Avatar>
              }
            >
              {user && !collapsed ? <div style={{ fontWeight: "bold", margin: "0 5px" }}>{user}</div> : <></>}
            </Button>
          </Dropdown>
        </div>
      </Sider>
      <Layout>
        {/* <AppRoutes /> */}
        <Outlet />
        <Footer
          style={{
            textAlign: "center",
            width: "100%",
            height: 70,
          }}
        >
          <div style={{ margin: "-10px 0 0 0" }}>
            免责声明：所有内容均由开源AI生成，请仔细甄别。
            <br />
            山西大学 ©{new Date().getFullYear()} Created By 大数据科学与产业研究院
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};
