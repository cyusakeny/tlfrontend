import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Homeicon} from '/home/keny/tlfrontend/src/images/home-icon.svg';
import {ReactComponent as CompetitionIcon} from'/home/keny/tlfrontend/src/images/competition-cup.svg';
import {ReactComponent as MyProfileIcon} from'/home/keny/tlfrontend/src/images/profile.svg';
import {ReactComponent as LoginIcon}from'/home/keny/tlfrontend/src/images/login-svg.svg';
import {ReactComponent as MenuIcon}from'/home/keny/tlfrontend/src/images/menu.svg';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
         <div>
         <nav className="flex flex-row justify-between ">
             <div className="border-black"> </div>
             <div className="sm:hidden mr-20">
        <MenuIcon className="fill-current text-gray-400 w-12 h-12"/>
             </div>
             <div className="pl-56 flex flex-row justify-between mt-4 bg-mydarkcolor">
            <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block hidden">
                 <Link to="/typing" className="text-white hover:text-black ">
                     <Homeicon className="fill-current text-gray-400 w-5 h-5 absolute left-1 insest-y-1"/>
                     Home</Link></div>
           <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block hidden">
                <Link to="/" className="text-white hover:text-black">
                    <CompetitionIcon className="fill-current text-gray-400  w-5 h-5 absolute left-1 insest-y-1"/>
                    Competition</Link></div> 
           <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block hidden"> 
           <Link to="/" className="text-white hover:text-black">
               <MyProfileIcon className="fill-current text-gray-400 w-5 h-5 absolute left-1 insest-y-1"/>
               MyProfile</Link> </div>
          <div  className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block hidden"> 
          <Link to="/" className="text-white hover:text-black">
              <LoginIcon className="fill-current text-gray-400   w-5 h-5 absolute left-1 insest-y-1"/>
              Login</Link></div>
             </div>
         </nav>
         </div>
         );
    }
}
 
export default Navbar;