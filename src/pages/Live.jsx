import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LiveSidebar from '../components/LiveSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHome,faKeyboard,faSearch} from'@fortawesome/free-solid-svg-icons'
import ProfileImage from'/home/keny/tlfrontend/src/images/stephen-curry.jpg'
import LiveCompetitors from '../components/LiveCompetitors';
class LivePage extends Component {
    render() { 
        return <div className="">
            <div className="bg-gray-100   absolute h-full w-full overflow-auto">
                
            <div className=" pl-16 flex flex-row space-x-16  ml-99.2
             w-2/5 mt-3 ">
                <Link className=" hover:bg-gray-100 w-24 pl-2 h-7 mt-1 
                rounded-md shadow-md bg-white" to=""><FontAwesomeIcon icon={faHome} className="mr-1"/>Home</Link>
                <Link className=" hover:bg-gray-100 w-24 pl-2 h-7 mt-1
                rounded-md shadow-md bg-white" to=""><FontAwesomeIcon icon={faKeyboard} className="mr-1"/>Typing</Link>
                <Link className="hover:bg-gray-100 rounded-xl pt-1 w-36 h-10 ml-10 hover:shadow-lg" to="">
                <div className=" flex flex-row w-36 pl-8 ">
               <img src={ProfileImage} alt="Profile" className="rounded-full w-8 h-8"/>
               <h1 className="text-black text-sm -mt-0.5 ml-1">Maestro</h1>
               <p className="mt-4 -ml-12 text-xs text-gray-600">Pro User</p>
                </div>
                </Link>
            </div>
            <div className=" relative  w-72  ml-99.2 mt-8">
             <form action="" className="flex flex-row">  <button className="shadow-md rounded-l-md border-gray-100 border-r
              w-8 h-7 bg-white "><FontAwesomeIcon icon={faSearch} className="text-gray-500 absolute left-1.5 top-1.5"/></button> 
                <input type="text" name="" id="" placeholder="Search" className="outline-none shadow-md
               placeholder-gray-500 rounded-r-lg"/>
               </form>
            </div>
            <div className="overflow-auto bg-white ml-72 h-full mt-10 shadow-lg mr-8 space-y-2">
                <div className="flex flex-row border border-black pl-10">
                    <p className="">100 Participants</p>
                    <p className="">Grand Prix Monaco</p>
                </div>
     <div className="flex flex-row text-gray-700 border border-white hover:border-gray-300 hover:shadow-md 
             bg-gray-100">
     <p className="pt-1 ml-2 w-16">Rank</p>
     <p className="pt-1 ml-4 w-36">Name</p>            
    <p className="pt-1 ml-4 w-12">Speed</p>
    <p className="pt-1 ml-8 w-12">Accuracy</p>
    <p className="pt-1 ml-12 w-20">Typos</p>
    <p className="pt-1 ml-3 w-24">Country</p>
    <p className="pt-1 w-16 ml-12">Level</p>
    <p className="pt-1 ml-24">Quote</p>
                </div>
               <LiveCompetitors/>
               <LiveCompetitors/>
               <LiveCompetitors/>
               <LiveCompetitors/>
               <LiveCompetitors/>
               <LiveCompetitors/>
               <LiveCompetitors/>
            </div>
            </div>
            <LiveSidebar/>
        </div>;
    }
}
 
export default LivePage;