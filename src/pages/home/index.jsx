import { theme, Layout } from "antd";
const { Header, Content } = Layout;

export const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
        <div style={{ fontSize: 20, fontWeight: "bold" }}>Deepseek对话</div>
      </Header>
      <Content
        style={{
          margin: "0 16px",
        }}
      >
        <div
          style={{
            margin: "16px 0",
            padding: 24,
            height: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <iframe
            src="http://10.108.201.199:8080/"
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
