import { theme, Layout, Button } from "antd";
import { useNavigate, useSearchParams } from "react-router";

const { Header, Content } = Layout;

export const Aiagents = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          type="text"
          style={{ fontSize: 20, fontWeight: "bold" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          {"<"}
        </Button>
        <div style={{ fontSize: 20, fontWeight: "bold" }}>
          {searchParams.get("title")}
        </div>
      </Header>
      <Content
        style={{
          margin: "0 16px",
        }}
      >
        <div
          style={{
            margin: "16px 0 0 0",
            padding: 24,
            height: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <iframe
            src={searchParams.get("iframeSrc")}
            frameBorder={"no"}
            style={{
              border: "none",
              minHeight: "100%",
              minWidth: "100%",
            }}
          ></iframe>
        </div>
      </Content>
    </>
  );
};
