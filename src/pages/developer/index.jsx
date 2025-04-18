import { theme, Layout, Spin } from "antd";
import { HeaderComponent } from "../../layouts";
import { useEffect, useState } from "react";
import { difyLogin } from "../../utils";
const { Content } = Layout;

export const Developer = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    difyLogin();
    window.onmessage = (e) => {
      if (e.data.finish) {
        setLoading(false);
        const iframeLogin = document.getElementById('difySignUpLogin');
        document.body.removeChild(iframeLogin && iframeLogin)
        const div = document.getElementById("developerContainer");

        // const iframe = document.getElementById("developer");
        const iframe = document.createElement('iframe');
        iframe.src = `http://${window.location.hostname}:8230/apps`
        iframe.style = 'border: none; min-height: 100%; min-width: 100%'
        div.appendChild(iframe)
      }
    }
    // iframe.onload = () => {
    //   iframe.contentWindow.postMessage(generateRegisterData('developer'), '*');
    // };

  }, []);

  return (
    <>
      <Spin spinning={loading} fullscreen></Spin>
      <HeaderComponent title={"开发者模式"} isNavigate={true} />
      <Content
        style={{
          margin: "0 16px",
        }}
      >
        <div
          id="developerContainer"
          style={{
            margin: "16px 0 0 0",
            padding: 24,
            height: "100%",
            minHeight: '100%',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* <iframe
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
          ></iframe> */}
        </div>
      </Content>
    </>
  );
};
