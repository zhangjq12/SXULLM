import { theme, Layout } from "antd";
import { useNavigate } from "react-router";
import { HeaderComponent } from "../../layouts";
import { useEffect } from "react";
const { Content } = Layout;

export const Developer = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  useEffect(() => {
    const iframe = window.frames["developer"];
    iframe.addEventListener("load", () => {
      iframe.postMessage(generateRegisterData());
    });
  }, []);

  return (
    <>
      <HeaderComponent title={"开发者模式"} isNavigate={true} />
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
            name="developer"
            src="http://10.108.201.199:3000/apps"
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
