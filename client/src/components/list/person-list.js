import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Card, Col, List, Row } from "antd";
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
            alignItems: "center",
          }}
        >
          <List.Item>
            <Card
              style={{
                width: "500px",
                maxWidth: "700px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  {"firstName"} {"lastName"}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Button type="default">
                    <EditTwoTone key="edit" onClick={() => {}} />
                  </Button>
                  <Button type="default" danger>
                    <DeleteTwoTone
                      key="delete"
                      onClick={() => {}}
                      twoToneColor="red"
                    />
                  </Button>
                </div>
              </div>
              <div></div>
            </Card>
            <Card
              style={{
                width: "500px",
                maxWidth: "700px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  {"firstName"} {"lastName"}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Button type="default">
                    <EditTwoTone key="edit" onClick={() => {}} />
                  </Button>
                  <Button type="default" danger>
                    <DeleteTwoTone
                      key="delete"
                      onClick={() => {}}
                      twoToneColor="red"
                    />
                  </Button>
                </div>
              </div>
              <div></div>
            </Card>
            <Card
              style={{
                width: "500px",
                maxWidth: "700px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  {"firstName"} {"lastName"}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Button type="default">
                    <EditTwoTone key="edit" onClick={() => {}} />
                  </Button>
                  <Button type="default" danger>
                    <DeleteTwoTone
                      key="delete"
                      onClick={() => {}}
                      twoToneColor="red"
                    />
                  </Button>
                </div>
              </div>
              <div></div>
            </Card>
            <Card
              style={{
                width: "500px",
                maxWidth: "700px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  {"firstName"} {"lastName"}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Button type="default">
                    <EditTwoTone key="edit" onClick={() => {}} />
                  </Button>
                  <Button type="default" danger>
                    <DeleteTwoTone
                      key="delete"
                      onClick={() => {}}
                      twoToneColor="red"
                    />
                  </Button>
                </div>
              </div>
              <div></div>
            </Card>
          </List.Item>
        </List>
      </Col>
    </Row>
  );
};

export default PersonList;
