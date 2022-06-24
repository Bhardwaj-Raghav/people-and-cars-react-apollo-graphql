import { Card, Typography } from "antd";
import { useState } from "react";
import EditCarForm from "../form/edit-car";
import CardHeader from "../miscellaneous/card-header";

const Text = Typography.Text;

const CarCard = ({ personCar }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (values) => {
    console.log(values);
  };
  const handleDelete = (carId) => {
    console.log(carId);
  };

  return isEditing ? (
    <EditCarForm
      make={"make,"}
      model={"model,"}
      year={2022}
      price={100}
      personId={"1"}
      personCar={{ carId: 1 }}
      cancelOnClick={() => setIsEditing(false)}
      saveOnClick={handleEdit}
    />
  ) : (
    <Card
      type="inner"
      title={
        <CardHeader
          title={"Car Details"}
          editOnClick={() => setIsEditing(true)}
          deleteOnClick={() => handleDelete(personCar.id)}
        />
      }
    >
      <div
        style={{
          display: "grid",
          gap: "5px",
          gridTemplateColumns: "repeat(auto-fit, 1fr)",
        }}
      >
        <Text>Make: Long name for Car Make</Text>
        <Text>Model: Long name for Car Make</Text>
        <Text>Year: 2022</Text>
        <Text>Price: Long name for Car Make</Text>
        <Text>Person: Long name for Car Make</Text>
      </div>
    </Card>
  );
};

export default CarCard;
