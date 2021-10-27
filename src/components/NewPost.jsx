import React from "react";
import { Link } from "react-router-dom";
import StephenCurry from "/home/keny/tlfrontend/src/images/stephen-curry.jpg";
const NewPost = (props)=>{
return(
    <div> 
    <Link className=" w-44   flex flex-col ">
    <img src={StephenCurry} className="h-32 w-44 rounded " alt="My pic"/>
    <p className=" text-sm ml-9"> 02/11/2021 </p>
    <p className="Font-Bold w-44 max-h-12 overflow-hidden text-xl">Beginner's Guides</p>
    <p className=" w-44 max-h-12  overflow-hidden  text-gray-500 text-sm ml-4">This book is about the fundamentals </p>
    </Link>
    </div>
   
);
}
export default NewPost;