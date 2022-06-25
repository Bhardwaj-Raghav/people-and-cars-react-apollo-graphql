import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_PERSON } from "../../queries";
import PersonCard from "../card/person-card";
import ErrorMessage from "../miscellaneous/error-message";
import Loader from "../miscellaneous/loader";

const PersonDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: { id },
  });

  return (
    <>
      <Loader isLoading={loading} />
      {error ? <ErrorMessage message={error.message} /> : null}
      {data ? (
        <>
          <Link
            to="/"
            style={{
              marginLeft: "50px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            GO BACK HOME
          </Link>
          <PersonCard
            key={data.person.id}
            person={data.person}
            isDetailPage={true}
          />
        </>
      ) : null}
      ;
    </>
  );
};

export default PersonDetail;
