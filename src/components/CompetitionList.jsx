import React from "react";
import { useHistory } from "react-router-dom";
const CompetitionList = (props) => {
  const history = useHistory();

  const ViewMatches = () => {
    let path = `/ViewMatches/${props.id}`;
    history.push(path);
  };
  const ViewRequierements = () => {
    let path = `/ViewRequirements`;
    history.push(path);
  };
  return (
    <div className="border-2 rounded-lg flex flex-row mt-10  ml-10 mr-4 h-12 bg-white">
      <p className=" mr-2 w-52 mt-2 pl-2">{props.name}</p>
      <p className=" w-44 mr-12 mt-2">{props.begindate}</p>
      <p className=" mr-16 mt-2">{props.enddate}</p>
      <button
        className="border  rounded mr-10 w-32 text-white bg-indigo-600 h-9 mt-1"
        onClick={ViewMatches}
      >
        {" "}
        Matches
      </button>
      <button
        className="border  rounded mr-10 w-40 text-black bg-yellow-600 h-9 mt-1"
        onClick={ViewRequierements}
      >
        {" "}
        Requirements
      </button>
      <button className="border  rounded w-20 text-white bg-green-500  h-9 mt-1">
        Join
      </button>
    </div>
  );
};
export default CompetitionList;
