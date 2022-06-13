import React from "react";
import { Link } from "react-router-dom";
import StephenCurry from "../images/stephen-curry.jpg";
const NewPost = (props) => {
  return (
    <div>
      <Link className=" w-72  flex flex-col ">
        <img src={StephenCurry} className="h-36 w-full rounded " alt="My pic" />
        <p className=" text-sm text-gray-500 mt-3"> November 22 2021 </p>
        <p className="Font-Bold w-full max-h-111 overflow-hidden text-xl font-bold mt-2">
          {props.text}
        </p>
        <p className=" w-44 max-h-16 overflow-hidden text-gray-500 text-sm mt-2">
          This book is about the fundamentals officia aut!{" "}
        </p>
      </Link>
    </div>
  );
};
export default NewPost;
