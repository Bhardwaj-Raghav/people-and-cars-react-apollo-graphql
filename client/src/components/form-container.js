import { Col, Row } from "antd";
import AddCarForm from "./form/add-car";
import AddPersonForm from "./form/add-person";
import Title from "./title";

const FormContainer = () => {
  return (
    <Row gutter={[0, 0]} align="middle">
      <Col span={12} justify="center" align="middle">
        <Col justify="center" align="middle">
          <Title text={"Add Person"} level={3} />
          <AddPersonForm />
        </Col>
      </Col>
      <Col span={12}>
        <Col justify="center" align="middle">
          <Title text={"Add Car"} level={3} />
          <AddCarForm />
        </Col>
      </Col>
    </Row>
  );
};

export default FormContainer;
