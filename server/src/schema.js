import { gql } from "apollo-server-express";
import { people, cars } from "../dummy-data";

const typeDefs = gql`
  type Person {
    id: String!
    firstName: String
    lastName: String
    cars: [Car]
  }
  type Car {
    id: String!
    year: String
    make: String
    model: String
    price: String
    personId: String!
    personDetail: Person
  }
  type Query {
    people: [Person]
    cars: [Car]
    person(id: String!): Person
    car(id: String!): Car
  }

  type Mutation {
    createPerson(id: String!, firstName: String!, lastName: String!): Person
    createCar(
      id: String!
      year: String!
      make: String!
      model: String!
      price: String!
      personId: String!
    ): Car
    updatePerson(id: String!, firstName: String, lastName: String): Person
    updateCar(
      id: String!
      year: String
      make: String
      model: String
      price: String
      personId: String
    ): Car
    deletePerson(id: String!): Person
    deleteCar(id: String!): Car
  }
`;

const resolvers = {
  Query: {
    people: () => {
      const finalData = people.map((person) => {
        const _cars = cars.filter((car) => car.personId === person.id);
        return { ...person, cars: _cars };
      });
      return finalData;
    },
    cars: () => {
      const finaldata = cars.map((car) => {
        const _person = people.find((person) => person.id === car.personId);
        return { ...car, personDetail: _person };
      });
      return finaldata;
    },
    person: (_, { id }) => {
      const person = people.find((person) => person.id === id);
      return { ...person, cars: cars.filter((car) => car.personId === id) };
    },
    car: (_, { id }) => cars.find((car) => car.id === id),
  },
  Mutation: {
    createPerson: (_, { id, firstName, lastName }) => {
      const newPerson = {
        id: String(people.length + 1),
        firstName,
        lastName,
        cars: [],
      };
      people.push(newPerson);
      return newPerson;
    },
    createCar: (_, { year, make, model, price, personId }) => {
      const newCar = {
        id: String(cars.length + 1),
        year,
        make,
        model,
        price,
        personId,
      };
      cars.push(newCar);
      return newCar;
    },
    updatePerson: (_, { id, firstName, lastName }) => {
      const person = people.find((person) => person.id === id);
      if (!person) {
        throw new Error("Person not found");
      }
      if (firstName) person.firstName = firstName;
      if (lastName) person.lastName = lastName;
      return person;
    },
    updateCar: (_, { id, year, make, model, price, personId }) => {
      const car = cars.find((car) => car.id === id);
      if (!car) {
        throw new Error("Car not found");
      }
      if (year) car.year = year;
      if (make) car.make = make;
      if (model) car.model = model;
      if (price) car.price = price;
      if (personId) car.personId = personId;
      return car;
    },
    deletePerson: (_, { id }) => {
      const person = people.find((person) => person.id === id);
      if (!person) {
        throw new Error("Person not found");
      }
      people.splice(people.indexOf(person), 1);
      return person;
    },
    deleteCar: (_, { id }) => {
      const car = cars.find((car) => car.id === id);
      if (!car) {
        throw new Error("Car not found");
      }
      cars.splice(cars.indexOf(car), 1);
      return car;
    },
  },
};

export { typeDefs, resolvers };
