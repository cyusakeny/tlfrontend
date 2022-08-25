import React, { useState } from "react";
import ProfileImage from "../images/avatar.png";
const ViewWinnerList = (props) => {
  const [src,setSrc] = useState(ProfileImage);
  if(props.image!==null){
    setSrc("https://tlserver.herokuapp.com/"+props.image);
  }
  console.log("score", props.score);
  return (
    <div className="border-2 ml-36 pl-8 mr-98 mt-8 bg-white rounded-lg">
      <p className="text-4xl ml-44">{props.name}</p>
      <p className="text-xl text-gray-color-250 ml-44 ">{props.email}</p>
      <img
        src={src}
        alt="ProfilePic"
        className="h-16 w-16 rounded-full -mt-16"
      />
      <div className=" flex flex-row space-x-20 ml-44 mt-2">
        <p className="text-gray-color-250">Speed:</p>
        <p className="">76 WPM</p>
      </div>
      <div className=" flex flex-row space-x-16 ml-44">
        <p className="text-gray-color-250">Accuracy:</p>
        <p className="">97%</p>
      </div>
      <div className=" flex flex-row space-x-24 ml-44">
        <p className="text-gray-color-250">Score:</p>
        <p className="">{props.score}</p>
      </div>
    </div>
  );
};
export default ViewWinnerList;
