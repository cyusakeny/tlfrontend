import React from 'react';
import LiveCompetitions from './LiveCompetions';
const  LiveSidebar = (props)=>{
    return(
        <div className=" bg-gray-100 flex flex-col justify between w-64 space-y-2 overflow-hidden h-full absolute">
       <LiveCompetitions/>
       <LiveCompetitions/>
       <LiveCompetitions/>
       <LiveCompetitions/>
       <LiveCompetitions/>
       <LiveCompetitions/>
       <LiveCompetitions/>
       <LiveCompetitions/>
       <LiveCompetitions/>
        </div>
    );
}
export default LiveSidebar;