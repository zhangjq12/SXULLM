import { theme, Button, Layout } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { logout } from "../../utils";

const { Header } = Layout;

export const HeaderComponent = ({ title, isNavigate }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const [user, setUser] = useState(undefined);
  const [color, setColor] = useState("orange");

  const randomColor = () => {
    const ran = Math.random() * 6;
    if (ran < 1) {
      return "cyan";
    } else if (ran < 2) {
      return "purple";
    } else if (ran < 3) {
      return "pink";
    } else if (ran < 4) {
      return "yellow";
    } else if (ran < 5) {
      return "blue";
    } else {
      return "orange";
    }
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
      <div style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>{title}</div>
      <div style={{ margin: "0 5px" }}>
        <Button
          shape={"circle"}
          variant="filled"
          color={color}
          onClick={() => {
            logout();
          }}
        >
          {user && user[0]}
        </Button>
      </div>
    </Header>
  );
};
