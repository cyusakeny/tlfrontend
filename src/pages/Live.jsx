import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LiveSidebar from '../components/LiveSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHome,faKeyboard,faSearch,faUsers,faBorderAll, faGamepad} from'@fortawesome/free-solid-svg-icons'
import ProfileImage from'/home/keny/tlfrontend/src/images/stephen-curry.jpg'
import LiveCompetitors from '../components/LiveCompetitors';
import CompetitionImage from '/home/keny/tlfrontend/src/images/bats.jpg';
import {io} from'socket.io-client'
const socketRef =  io.connect("http://localhost:5001",{ transports: ['websocket'] });
class LivePage extends Component {
    state={
         presentationdata:[]
    }
   componentDidMount(){
       document.title="LivePage"
       this.ReceiveData();
   }
   ReceiveData=()=>{
    socketRef.on("OurData",(personalInfo)=>{
        console.log("Data received ",personalInfo)    
        this.setState({
            presentationdata:[... personalInfo]
        })
    })
   } 
    render() { 
        let information =[... this.state.presentationdata]
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
            <div className=" ml-72 flex flex-row space-x-10 mt-8">
                <p className=" w-28 px-2 rounded-md bg-white shadow-md text-gray-600 hover:bg-gray-800 hover:text-gray-100"> <FontAwesomeIcon icon={faBorderAll}/> Round 16</p>
                <p className=" w-28 px-2 rounded-md bg-white shadow-md text-gray-600 hover:bg-gray-800 hover:text-gray-100"> <FontAwesomeIcon icon={faGamepad}/> Game 17</p>
            </div>
            <div className=" relative  w-72  ml-99.2 -mt-6">
             <form action="" className="flex flex-row">  <button className="shadow-md rounded-l-md border-gray-100 border-r
              w-8 h-7 bg-white "><FontAwesomeIcon icon={faSearch} className="text-gray-500 absolute left-1.5 top-1.5"/></button> 
                <input type="text" name="" id="" placeholder="Search" className="outline-none shadow-md
               placeholder-gray-500 rounded-r-lg"/>
               </form>
            </div>
            <div className="overflow-auto bg-white ml-72 h-full mt-10 shadow-lg mr-8 space-y-2">
                <div className="py-8 flex flex-row space-x-32">
                    <p className="font-bold ml-20 text-2xl">100 <FontAwesomeIcon icon={faUsers} /> PLAYERS</p>
                    <p className="text-gray-600 text-4xl flex flex-row"><img src={CompetitionImage} alt="Competition logo" className="rounded-full w-10 h-10" /> Grand Prix Monaco</p>
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
                {
                information.map((value,index)=>{
                    return <LiveCompetitors speed={value.speed} 
                    score={value.id} accuracy={value.name} key={index}/>
                })
                }
            </div>
            </div>
            <LiveSidebar/>
        </div>;
    }
}
 
export default LivePage;