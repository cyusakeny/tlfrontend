import React from 'react';
import Profile from'/home/keny/tlfrontend/src/images/stephen-curry.jpg';
const LiveCompetitions = (props)=>{
    return(
      <div className="flex flex-row space-x-4  ml-4 w-48 pl-0.5 text-gray-600 rounded-md py-2 hover:bg-white hover:shadow-md hover:border-1">
          <img src={Profile} alt="ImageProfile" className="rounded-full w-8 h-7"/>
         <p className="text-base">French lick</p> 
          </div>
    );
}
export default LiveCompetitions;