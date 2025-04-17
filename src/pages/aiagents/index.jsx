import { theme, Layout } from "antd";
import { useSearchParams } from "react-router";
import { HeaderComponent } from "../../layouts";
import { generateRegisterData } from "../../utils";

const { Content } = Layout;

export const Aiagents = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const iframe = document.getElementById("aiagents");
    iframe.onload = () => {
      iframe.contentWindow.postMessage(generateRegisterData(), '*');
    };
  }, []);

  return (
    <>
      <HeaderComponent title={searchParams.get("title")} isNavigate={true} />
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
            id="aiagents"
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
