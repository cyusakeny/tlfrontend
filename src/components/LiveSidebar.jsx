import React from 'react';
import { useState } from 'react';
import LiveCompetitions from './LiveCompetions';
import {FontAwesomeIcon}from'@fortawesome/react-fontawesome';
import {faArrowAltCircleDown,faArrowAltCircleUp}from'@fortawesome/free-solid-svg-icons'
const  LiveSidebar = (props)=>{
    const [CurrentPage, setCurrentPage] = useState(1);
    let TotalPosts=[];
    let PostPerPage=7;
    let i =1;
    for (let i = 0; i < 100; i++) {
        TotalPosts.push(i);   
    }
   const HandleUpperArrow = ()=>{
       if (i>1) {
           i=i-1;
       }
       else{
           i=1;
       }
       setCurrentPage(i);
   }
  const HandleLowerArrow = ()=>{
    if (i<(Math.ceil(TotalPosts.length/PostPerPage))) {
        i=i+1;
    }
    else{
        i=Math.ceil(TotalPosts.length/PostPerPage);
    }
setCurrentPage(i);
   }
   const indexOfLastPost=CurrentPage*PostPerPage;
   const indexOfFirstPost=indexOfLastPost-PostPerPage;
   const CurrentPosts=TotalPosts.slice(indexOfFirstPost,indexOfLastPost) 
    return(
        <div className=" bg-gray-100 flex flex-col justify between w-64 space-y-6 overflow-hidden h-full absolute py-10">
      <button className="border border-gray-200 w-6 ml-24 bg-gray-200" onClick={HandleUpperArrow}><FontAwesomeIcon icon={faArrowAltCircleUp}/></button>
       {
           CurrentPosts.map(item=>{
               return <LiveCompetitions key={item} name={"Maestro"+item}/>
           })
       }
       <button className="border border-gray-200 w-6 ml-24 bg-gray-300"onClick={HandleLowerArrow} ><FontAwesomeIcon icon={faArrowAltCircleDown}/></button>
        </div>
    );
}
export default LiveSidebar;