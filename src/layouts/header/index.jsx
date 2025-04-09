import { theme, Button, Layout, Dropdown, Avatar } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { calculateFrontColorToBackGround, logout } from "../../utils";

const { Header } = Layout;

const menuItems = [
  {
    label: "登出",
    key: "1",
  },
];

export const HeaderComponent = ({ title, isNavigate }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const [user, setUser] = useState(undefined);
  const [color, setColor] = useState("orange");

  const randomColor = () => {
    // const ran = Math.random() * 6;
    // if (ran < 1) {
    //   return "#00ffff";
    // } else if (ran < 2) {
    //   return "#800080";
    // } else if (ran < 3) {
    //   return "#ffc0cb";
    // } else if (ran < 4) {
    //   return "#ff0000";
    // } else if (ran < 5) {
    //   return "#0000ff";
    // } else {
      return "#ffa500";
    // }
  };

  useEffect(() => {
    setUser(sessionStorage.getItem("userName"));
    setColor(randomColor());
  }, []);

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: "flex",
        alignItems: "center",
      }}
    >
      {isNavigate && (
        <Button
          type="text"
          style={{ fontSize: 20, fontWeight: "bold" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          {"<"}
        </Button>
      )}
      <div style={{ fontSize: 20, fontWeight: "bold", flex: 1, margin: "0 10px" }}>{title}</div>
      <Dropdown
        menu={{
          items: menuItems,
          onClick: ({ key }) => {
            if (key === "1") {
              logout();
            }
          },
        }}
      >
        <Button
          type={"text"}
          style={{
            margin: "0 15px 0 0",
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
          <div style={{ fontWeight: "bold", margin: "0 5px" }}>
            {user && user}
          </div>
        </Button>
      </Dropdown>
    </Header>
  );
};
