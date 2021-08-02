import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Homeicon} from '/home/keny/tlfrontend/src/images/home-icon.svg';
import {ReactComponent as CompetitionIcon} from'/home/keny/tlfrontend/src/images/competition-cup.svg';
import {ReactComponent as MyProfileIcon} from'/home/keny/tlfrontend/src/images/profile.svg';
import {ReactComponent as LoginIcon}from'/home/keny/tlfrontend/src/images/login-svg.svg';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
         <div>
         <nav className="flex flex-row justify-between">
             <div className="border-black"> </div>
             <div className="pl-56 flex flex-row justify-between mt-4 bg-mydarkcolor">
            <div className=" relative px-6 mr-20">
                 <Link to="/" className="text-white">
                     <Homeicon className="fill-current text-gray-400 w-5 h-5 absolute left-1 insest-y-1"/>
                     Home</Link></div>
           <div className=" relative px-6 mr-20">
                <Link to="/" className="text-white">
                    <CompetitionIcon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-1"/>
                    Competition</Link></div> 
           <div className=" relative px-6 mr-20"> 
           <Link to="/" className="text-white">
               <MyProfileIcon className="fill-current text-gray-400 w-5 h-5 absolute left-1 insest-y-1"/>
               MyProfile</Link> </div>
          <div  className="relative px-6 mr-20"> 
          <Link to="/" className="text-white">
              <LoginIcon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-1"/>
              Login</Link></div>
             </div>
         </nav>
         </div>
         );
    }
}
 
export default Navbar;