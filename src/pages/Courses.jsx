import React, { Component } from 'react';
 import NewPost from '../components/NewPost';
import SideBar from '../components/SideBar';
import PostImage1 from'/home/keny/tlfrontend/src/images/audi.jpg';
class Courses extends Component {
    render() { 
        return <div className="">
            <div className="bg-gray-100 absolute h-full w-full overflow-auto">
               <div className=" ml-60 flex flex-row space-x-8 mt-10 ">
            <img src={PostImage1} alt="Stark" className="w-96 h-56 rounded-md"/>
            <p className="flex flex-col ">
                <p className="text-sm text-gray-400 ">March 1 2021</p>
                <h1 className=" w-72 max-h-8 overflow-hidden mt-4 font-bold text-3xl">The Best Of Audi </h1>
                <p className="w-103 max-h-36 overflow-hidden mt-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error,
</p>
            </p>
               </div>
               <div className=" ml-60 mt-20 grid grid-flow-row grid-cols-3 gap-8">
  <NewPost text="Advanced Weapons Manufacturer And System Designers"/>
  <NewPost text="Mucho gracias"/>
  <NewPost text="officia aut! Impedit sit sunt quaerat, odit,"/>
  <NewPost text="officia aut! Impedit sit sunt quaerat, odit,officia aut! Impedit sit sunt quaerat, odit,"/>
  <NewPost text="officia aut! Impedit sit sunt quaerat, odit,officia aut! Impedit sit sunt quaerat, odit,"/>
  <NewPost text="officia aut! Impedit sit sunt quaerat, odit,officia aut! Impedit sit sunt quaerat, odit,"/>
  <NewPost text="officia aut! Impedit sit sunt quaerat, odit,officia aut! Impedit sit sunt quaerat, odit,"/>
</div>
             </div>
             <SideBar/>
        </div>;
    }
}
 
export default Courses;