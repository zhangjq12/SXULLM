import { theme, Layout } from "antd";
import { HeaderComponent } from "../../layouts";
import { useEffect } from "react";
import { generateRegisterData } from "../../utils";
const { Content } = Layout;

export const Developer = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const iframe = document.getElementById("developer");
    iframe.onload = () => {
      iframe.contentWindow.postMessage(generateRegisterData(), '*');
    };
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
            id="developer"
            // src="http://10.108.201.199:3000/apps"
            // src="http://localhost:3000"
            src={`http://${window.location.hostname}:8230/apps`}
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
