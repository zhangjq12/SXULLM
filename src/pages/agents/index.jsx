import { theme, Card, Layout, Button } from "antd";
import { AI_AGENTS_COMPONENTS } from "../../statics";
import { useNavigate } from "react-router";

const { Meta } = Card;
const { Header, Content } = Layout;

export const Agents = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const cards = AI_AGENTS_COMPONENTS.map((v, i) => {
    return (
      <Card
        key={i}
        hoverable
        style={{
          width: 250,
          margin: 15,
          height: 320,
        }}
        // size="small"
        cover={<img src={v.src} style={{ height: 200 }} />}
        onClick={() => {
          navigate(
            `/aiagents?iframeSrc=http://10.108.201.199:3000/chat/${v.navigate}&title=${v.title}`
          );
        }}
      >
        <Meta title={v.title} description={v.sub} />
      </Card>
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
