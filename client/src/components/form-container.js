import { Col, Row } from "antd";
import CarForm from "./form/car";
import PersonForm from "./form/person";
import Title from "./title";

const FormContainer = () => {
  return (
    <Row gutter={[0, 0]} align="middle">
      <Col span={12} justify="center" align="middle">
        <Col justify="center" align="middle">
          <Title text={"Add Person"} level={3} />
          <PersonForm />
        </Col>
      </Col>
      <Col span={12}>
      <Col justify="center" align="middle">
          <Title text={"Add Car"} level={3} />
          <CarForm />
        </Col>
      </Col>
    </Row>
  );
};

export default FormContainer;
