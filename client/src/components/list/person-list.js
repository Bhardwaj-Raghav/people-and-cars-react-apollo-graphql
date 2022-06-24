import { Col, List, Row } from "antd";
import PersonCard from "../card/person-card";
import Title from "../title";

const PersonList = () => {
  return (
    <Row>
      <Col span={24}>
        <Title text="People List" level={3} />
        <List
          grid={{ gutter: 20, column: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <List.Item>
            <PersonCard
              person={{ id: 1, firstname: "test", lastname: "last" }}
            />
          </List.Item>
        </List>
      </Col>
    </Row>
  );
};

export default PersonList;
