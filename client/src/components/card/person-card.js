import { Card } from "antd";
import { useState } from "react";
import EditPersonForm from "../form/edit-person";
import CardHeader from "../miscellaneous/card-header";
import CarCard from "./car-card";

const PersonCard = ({ person }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedValues) => {
    console.log(updatedValues);
    setIsEditing(false);
  };
  const handleDelete = (personId) => {
    console.log(personId);
  };

  return (
    <Card
      headStyle={{
        backgroundColor: "#fdfdfd",
      }}
      title={
        isEditing ? (
          <EditPersonForm
            saveOnClick={handleEdit}
            cancelOnClick={() => {
              setIsEditing(false);
            }}
            firstname={person.firstname}
            lastname={person.lastname}
          />
        ) : (
          <CardHeader
            title={person.firstname + " " + person.lastname}
            editOnClick={() => setIsEditing(true)}
            deleteOnClick={() => handleDelete(person.id)}
          />
        )
      }
      style={{
        marginBottom: "20px",
      }}
      actions={[
        <a
          href="#here"
          style={{
            textAlign: "left",
            marginLeft: "14px",
            fontWeight: "bold",
            color: "#1890ff",
          }}
        >
          LEARN MORE
        </a>,
      ]}
    >
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
        <CarCard personCar={{ carId: 1 }} />
      </div>
    </Card>
  );
};

export default PersonCard;
