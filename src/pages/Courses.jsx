import React, { Component } from 'react';
 import NewPost from '../components/NewPost';
import SideBar from '../components/SideBar';
class Courses extends Component {
    render() { 
        return <div className="">
            <SideBar/>
            
            <div className="bg-white  ml-46 absolute h-full w-101 overflow-auto ">
               <div className="bg-black h-28 flex flex-row space-x-10">
                   <p className="text-5xl text-white mt-6 ml-96">...</p>
                   <h1 className="text-5xl text-white mt-6 ml-96">TYPING</h1>
                   <h1 className="text-4xl font-postcolombo  text-yellow-color  mt-6 "> LORD</h1>
                   <p className="text-5xl text-white mt-6 ">...</p>            
               </div>
               <div className="mt-4 flex flex-row space-x-16">
                    <button className=" ml-80 w-16 bg-gray-200 rounded hover:bg-black hover:text-white">All</button>
                    <button className=" w-20 bg-gray-200 rounded hover:bg-black hover:text-white">Basics</button>
                    <button className=" w-28 bg-gray-200 rounded hover:bg-black hover:text-white">Intermediate</button>
                    <button className=" w-24 bg-gray-200 rounded hover:bg-black hover:text-white">Advanced</button>
               </div>
               <div className="bg-white-color-100 mt-8 mx-60 pl-8 pt-4  space-x-4  flex flex-wrap content-start pb-10">
                <NewPost/>
                <NewPost/>
                <NewPost/>
                <NewPost/>
             
              
                     </div>
            </div>
        </div>;
    }
}
 
export default Courses;