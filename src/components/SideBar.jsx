import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Homeicon} from '/home/keny/tlfrontend/src/images/home-icon.svg';
import {ReactComponent as CompetitionIcon} from'/home/keny/tlfrontend/src/images/competition-cup.svg';
import {ReactComponent as MyProfileIcon} from'/home/keny/tlfrontend/src/images/profile.svg';
import {ReactComponent as CourseIcon}from'/home/keny/tlfrontend/src/images/online-course.svg';
import {ReactComponent as TypeIcon}from'/home/keny/tlfrontend/src/images/typing.svg'; 
import {ReactComponent as LogoutIcon}from'/home/keny/tlfrontend/src/images/logout-svgrepo-com.svg';
class SideBar extends Component {
    render() { 
        return (  
            <div className="">
                <nav>
            <div className="bg-mydarkcolor flex flex-col justify between mr-600 overflow-hidden h-full absolute ">
                <div className=" mt-8 relative pl-6 pr-0.5 ml-8 mr-20 rounded-md hover:bg-yellow-color">
               <Link to="" className="text-white hover:text-black"><Homeicon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-1"/>
               HOME</Link>
                </div>
                <div className="  mt-12 relative pl-6 ml-8 mr-20 pr-0.5 rounded-md hover:bg-yellow-color">
                <Link to="" className="text-white hover:text-black"><TypeIcon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-1"/>
                TYPE</Link>
                </div>
                <div className="  mt-12 relative pl-6 ml-8 mr-12 pr-0.5 rounded-md hover:bg-yellow-color">
                <Link to="" className="text-white hover:text-black"><CourseIcon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-1"/>
                COURSES</Link>
                </div>
                <div className="  mt-12 relative pl-6 ml-8 mr-4 pr-0.5 rounded-md hover:bg-yellow-color">
                <Link to="" className="text-white hover:text-black"><CompetitionIcon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-1"/>
                COMPETITION</Link>
                </div>
                <div className="  mt-12 relative pl-6 ml-8 mr-8 pr-0.5 rounded-md hover:bg-yellow-color">
                <Link to="" className="text-white hover:text-black"><MyProfileIcon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-1"/>
                MYPROFILE</Link>
                </div>
                <div className=" mt-12 relative pl-6 ml-8 mr-16 pr-0.5 rounded-md pt-0.5 hover:bg-yellow-color">
                <Link to="" className="text-white hover:text-black"><LogoutIcon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-5"/>
                LOGOUT</Link>
                </div>
            </div>
            </nav>
            </div>
        );
    }
}
 
export default SideBar;