import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../images/stephen-curry.jpg";
const LiveCompetitors = (props) => {
  return (
    <div
      className="flex flex-row gap-4 text-gray-700 border border-white hover:border-gray-300
         hover:shadow-md rounded-md"
    >
      <p className="pt-1  ml-2 w-10 text-center">{props.rank + 1}</p>
      <Link className="ml-2  rounded-xl pt-1 w-44 h-10" to="">
        <div className=" flex flex-row w-36">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-full w-8 h-8"
          />
          <div className="flex flex-col -mt-0.5">
            <h1 className="text-black text-sm  self-start">{props.name}</h1>
            <p className=" text-xs text-gray-600">Pro User</p>
          </div>
        </div>
      </Link>
      <p className="pt-1   w-24">{props.speed}</p>
      <p className="pt-1   w-10">{props.accuracy}</p>
      <p className="pt-1  ml-4 w-20">{props.score}</p>
      <p className="pt-1  ml-4 w-24">Rwanda</p>
      <p className="pt-1  ml-4 w-32">Pro It is</p>
      <p className="pt-1  ml-4 w-56">"Ready to Rumble "</p>
    </div>
  );
};
export default LiveCompetitors;
