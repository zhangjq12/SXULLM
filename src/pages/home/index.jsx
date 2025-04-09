import { theme, Layout } from "antd";
import { HeaderComponent } from "../../layouts";
import { useEffect } from "react";
import { generateRegisterData } from "../../utils";
const { Content } = Layout;

export const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const iframe = document.getElementById('deepseek');
    iframe.onload = () => {
      iframe.contentWindow.postMessage(generateRegisterData(), '*');
    };
  }, []);

  return (
    <>
      <HeaderComponent title={"对话大模型"} isNavigate={false} />
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
            id="deepseek"
            // src="http://10.108.201.199:8082/"
            // src="http://localhost:5173"
            src={`http://${window.location.hostname}:8280/`}
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
