import React from "react";
import Profile from "../images/Comp.jpg";
const LiveCompetitions = ({ handleclick, id, name }) => {
  return (
    <div
      className="flex flex-row space-x-4  ml-8 w-48 pl-0.5 text-gray-600 rounded-md py-2 hover:bg-white hover:shadow-md hover:border-1"
      onClick={() => handleclick(id, name)}
    >
      <img src={Profile} alt="ImageProfile" className="rounded-full w-8 h-7" />
      <p className="text-base">{name}</p>
    </div>
  );
};
export default LiveCompetitions;
