import { theme, Card, Layout, Button, Col, Typography } from "antd";
import { AI_AGENTS_COMPONENTS } from "../../statics";
import { useNavigate } from "react-router";

const { Meta } = Card;
const { Header, Content } = Layout;
const { Text } = Typography;

export const Agents = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

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
              `/aiagents?iframeSrc=http://10.108.201.199:3000/${v.navigate}&title=${v.title}`
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
        <div style={{ fontSize: 20, fontWeight: "bold" }}>智能体广场</div>
      </Header>
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
