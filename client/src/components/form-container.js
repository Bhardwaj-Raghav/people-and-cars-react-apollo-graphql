import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import AddCarForm from "./form/add-car";
import AddPersonForm from "./form/add-person";
import Title from "./title";

const FormContainer = () => {
  const personsCount = useSelector((state) => state.people.persons.length);

  return (
    <Row gutter={[0, 0]} align="middle">
      <Col span={personsCount ? 12 : 24} justify="center" align="middle">
        <Col justify="center" align="middle">
          <Title text={"Add Person"} level={3} />
          <AddPersonForm />
        </Col>
      </Col>
      {personsCount ? (
        <Col span={12}>
          <Col justify="center" align="middle">
            <Title text={"Add Car"} level={3} />
            <AddCarForm />
          </Col>
        </Col>
      ) : null}
    </Row>
  );
};

export default FormContainer;
