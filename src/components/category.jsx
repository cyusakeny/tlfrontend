import React from "react";
const Category = (props) => {
  return (
    <div className="">
      <img
        src={props.src}
        alt="pic"
        className="relative shadow-lg rounded-full h-28 w-28 align-middle border-none"
      />
      <span className="px-2 absolute text-gray-300 w-auto -left-5 font-sans text-2xl">
        {props.data}
      </span>
    </div>
  );
};
export default Category;
