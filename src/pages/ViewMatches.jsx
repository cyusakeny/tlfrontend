import React, { Component } from 'react';
import MatchList from '../components/MatchList';
import SideBar from '../components/SideBar';
import {ReactComponent as SortIcon}from'/home/keny/tlfrontend/src/images/sort.svg';
class ViewMatches extends Component {
    render() { 
        return <div className="">
          <SideBar/>
          <div className="bg-gray-200  ml-46 absolute h-full w-101 overflow-hidden ">
                <div className=" flex flex-row mt-10 space-x-32 ml-12 ">
                    <p className=" text-xl w-20 relative">Date<SortIcon className="absolute left-12 w-8 h-6 top-0.5 "/></p>
                    <p className="text-xl  w-20 relative">Time<SortIcon className="absolute left-12 w-8 h-6 top-0.5 "/></p>
                    <p className="text-xl  w-16 relative">Round</p>
                    <p className="text-xl  w-16 relative">Participants</p>
                </div>
                <MatchList/>    
                <MatchList/> 
                <MatchList/> 
                <MatchList/> 
                <MatchList/> 
                <MatchList/> 
                <MatchList/> 
        </div>;
        </div>
    }
}
 
export default ViewMatches;