import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from'/home/keny/tlfrontend/src/images/stephen-curry.jpg'
const LiveCompetitors=(props)=>{
    return(
        <div className="flex flex-row gap-4 text-gray-700 border border-white hover:border-gray-300
         hover:shadow-md rounded-md">
            <p className="pt-1  ml-2 w-10 text-center">1</p>
            <Link className="ml-2  rounded-xl pt-1 w-44 h-10" to="">
                <div className=" flex flex-row w-36 ">
               <img src={ProfileImage} alt="Profile" className="rounded-full w-8 h-8"/>
               <h1 className="text-black text-sm -mt-0.5 ml-1">Maestro</h1>
               <p className="mt-4 -ml-12 text-xs text-gray-600">Pro User</p>
                </div>
                </Link>
    <p className="pt-1   w-24">34 WPM</p>
    <p className="pt-1   w-10">90%</p>
    <p className="pt-1  ml-4 w-20">21 words</p>
    <p className="pt-1  ml-4 w-24">Rwanda</p>
    <p className="pt-1  ml-4 w-32">Junior Typist</p>
    <p className="pt-1  ml-4 w-56">"Ready to Rumble "</p>
        </div>
    );
}
export default LiveCompetitors;