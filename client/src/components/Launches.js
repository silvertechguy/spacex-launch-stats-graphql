import React from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (error) console.log(error);

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          {data.launches.map((launch) => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))}
        </>
      )}
    </>
  );
};

export default Launches;
