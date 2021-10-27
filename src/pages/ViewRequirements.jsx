import React, { Component } from 'react';
import SideBar from '../components/SideBar';
class ViewRequirements extends Component {
    render() { 
        return <div>
             <SideBar/>
            <div className="bg-white  ml-46 absolute h-full w-101 overflow-hidden ">
               <div className="ml-28 flex flex-col space-y-10 mt-8">
                <h1 className="font-bold text-3xl">About</h1>
                <p className="text-gray-color-230">This competition is for helping people to master typing</p>
                <h1 className="font-bold text-3xl">Requirements</h1>
                <p className="text-gray-color-230">Eligible for everyone</p>
                <h1 className="font-bold text-3xl">Prices</h1>
                <p className="text-gray-color-230">Two smart phones</p>
                <h1 className="font-bold text-3xl">Motivation</h1>
                <p className="text-gray-color-230">Learn to code for the better future</p>
            </div>
            </div>
        </div>;
    }
}
 
export default ViewRequirements;