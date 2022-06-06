import React from "react";
import { useHistory } from "react-router-dom";
const MatchList = (props) => {
  const history = useHistory();
  const ViewWinners = () => {
    let path = `/ViewWinners/${props.id}`;
    history.push(path);
  };
  return (
    <div className="border-2 rounded-lg flex flex-row mt-10  ml-10 mr-4 h-12 bg-white">
      <p className=" mr-2 w-32 mt-2 pl-2">{props.date}</p>
      <p className=" w-44 mr-12 mt-2 pl-16 ">{props.time} UTC</p>
      <p className="w-48 mr-20 mt-2 pl-12 ">{props.status}</p>
      <p className=" mr-32 mt-2 ">202</p>
      <button
        className="border  rounded mr-10 w-32 text-white bg-indigo-600 h-9 mt-1"
        onClick={ViewWinners}
      >
        View Winners
      </button>
    </div>
  );
};
export default MatchList;
