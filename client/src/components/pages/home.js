import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

import FormContainer from "../form-container";
import PersonList from "../list/person-list";
import Loader from "../miscellaneous/loader";
import ErrorMessage from "../miscellaneous/error-message";

import { setPerson } from "../../store/person";

import { GET_PERSONS } from "../../queries";
import { useState } from "react";

const Home = () => {
  const [dataFetchedOnce, setDataFetchedOnce] = useState(false);

  const { loading, error, data } = useQuery(GET_PERSONS);
  const dispatch = useDispatch();
  if (data && !dataFetchedOnce) {
    setDataFetchedOnce(true);
    dispatch(setPerson(data.people));
  }

  return (
    <>
      <Loader isLoading={loading} />
      {error ? <ErrorMessage message={error.message} /> : null}
      {data ? (
        <>
          <FormContainer />
          <PersonList />
        </>
      ) : null}
    </>
  );
};

export default Home;
