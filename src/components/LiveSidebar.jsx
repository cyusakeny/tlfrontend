import React, { useState } from 'react';
import LiveCompetitions from './LiveCompetions';
import {FontAwesomeIcon}from'@fortawesome/react-fontawesome';
import {faArrowAltCircleDown,faArrowAltCircleUp}from'@fortawesome/free-solid-svg-icons'
const  LiveSidebar = (props)=>{
    const [indexOfFirstPost,setFirstPost]=useState(0);
    const [indexOfLastPost,setLastPost]= useState(7);
    let TotalPosts=[];
    for (let index = 0; index < 100; index++) {
        TotalPosts.push(index);   
    }
   const HandleUpperArrow = ()=>{
   if (indexOfFirstPost>0) {
       setFirstPost(indexOfFirstPost-1);
       console.log("Value 1 of firstpost:"+indexOfFirstPost)
       setLastPost(indexOfLastPost-1);
       console.log("Value 1 of lastpost:"+indexOfLastPost)
   }
   }
  const HandleLowerArrow = ()=>{
      
    if (indexOfLastPost<TotalPosts.length-1) {
        setFirstPost(indexOfFirstPost+1);
        console.log("Value of firstpost:"+indexOfFirstPost)
        setLastPost(indexOfLastPost+1);
        console.log("Value of lastpost:"+indexOfLastPost)
    }   
}
   const CurrentPosts=TotalPosts.slice(indexOfFirstPost,indexOfLastPost) 
   console.log("Value"+indexOfFirstPost)
    return(
        <div className=" bg-gray-100 flex flex-col justify between w-64 space-y-6 overflow-hidden h-full absolute py-10">
      <button className="border border-gray-200 w-6 ml-24 bg-gray-200" onClick={HandleUpperArrow}><FontAwesomeIcon icon={faArrowAltCircleUp}/></button>
       {
           CurrentPosts.map(item=>{
               return <LiveCompetitions key={item} name={"Maestro"+item} id={item}/>
           })
       }
       <button className="border border-gray-200 w-6 ml-24 bg-gray-300"onClick={HandleLowerArrow} ><FontAwesomeIcon icon={faArrowAltCircleDown}/></button>
        </div>
    );
}
export default LiveSidebar;