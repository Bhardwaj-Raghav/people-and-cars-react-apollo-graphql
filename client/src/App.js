import React from "react";

import "./App.css";
import FormContainer from "./components/form-container";
import PersonList from "./components/list/person-list";
import Title from "./components/title";

const App = () => {
  return (
    <div className="App">
      <Title text="People Car GraphQL App" />
      <FormContainer />
      <PersonList />
    </div>
  );
};

export default App;
