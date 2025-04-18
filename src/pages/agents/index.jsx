import { theme, Card, Layout, Button, Col, Typography, Spin } from "antd";
import { AI_AGENTS_COMPONENTS } from "../../statics";
import { useNavigate } from "react-router";
import { HeaderComponent } from "../../layouts";
import { useEffect, useState } from "react";
import { difyLogin } from "../../utils";

const { Meta } = Card;
const { Content } = Layout;
const { Text } = Typography;

export const Agents = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    difyLogin();
    window.onmessage = (e) => {
      if (e.data.finish && !e.data.isWindow) {
        setLoading(false);
        const iframeLogin = document.getElementById("difySignUpLogin");
        document.body.removeChild(iframeLogin && iframeLogin);
      } else if (e.data.isWindow) {
        setLoading(false);
      } else {
        difyLogin();
      }
    };
  }, []);

  const cards = AI_AGENTS_COMPONENTS.map((v, i) => {
    return (
      <Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 12, offset: 0 }}
        md={{ span: 8, offset: 0 }}
        lg={{ span: 8, offset: 0 }}
        xl={{ span: 6, offset: 0 }}
        xxl={{ span: 4, offset: 0 }}
      >
        <Card
          key={i}
          hoverable
          // size="small"
          style={{
            margin: "5px 10px",
          }}
          cover={
            <img src={v.src} style={{ height: 200, objectFit: "cover" }} />
          }
          onClick={() => {
            navigate(
              `/aiagents?iframeSrc=http://${window.location.hostname}:8230/${v.navigate}&title=${v.title}`
            );
          }}
        >
          <Meta
            title={v.title}
            description={<Text ellipsis={true}>{v.sub}</Text>}
          />
        </Card>
      </Col>
    );
  });

  return (
    <>
      <Spin spinning={loading} fullscreen></Spin>
      <HeaderComponent title={"智能体广场"} isNavigate={true} />
      <Content
        style={{
          margin: "0 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "16px 0 0 0",
            padding: 24,
            height: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {cards}
        </div>
      </Content>
    </>
  );
};
