import React, { useEffect, useState } from "react";
import { MessageTwoTone, ShopTwoTone, CodeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { AppRoutes } from "../../routes/route";
import { useLocation, useNavigate } from "react-router";
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

export const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["/"]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSelectedKeys([location.pathname]);
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
          <div
            style={{
              margin: "0 10px",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {collapsed ? "" : "文瀛学者"}
          </div>
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["/"]}
          selectedKeys={selectedKeys}
          mode="inline"
          items={items}
          onClick={menuOnClick}
        />
      </Sider>
      <Layout>
        <AppRoutes />
        <Footer
          style={{
            textAlign: "center",
            width: "100%",
            height: 70,
          }}
        >
          <div style={{ margin: "-10px 0 0 0" }}>
            内容由AI生成，请仔细甄别。
            <br />
            山西大学 ©{new Date().getFullYear()} Created By 大数据科学产业研究院
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};
