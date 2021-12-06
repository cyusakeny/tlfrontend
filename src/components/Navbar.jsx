import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faKeyboard} from'@fortawesome/free-solid-svg-icons'
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
             <div className="pl-56 flex flex-row justify-between mt-4 bg-black">
            <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block text-white hover:text-black hidden">
                 <Link to="/typing" className="">
                     <FontAwesomeIcon icon={faKeyboard} className="fill-current top-1 absolute left-1 "/>
                     Typing</Link></div>
           <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block hidden text-white hover:text-black">
                <Link to="/competitions" className="">
                    <CompetitionIcon className="fill-current  w-5 h-5 absolute left-1 insest-y-1"/>
                    Competition</Link></div> 
           <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block hidden text-white hover:text-black"> 
           <Link to="/myprofile" className="">
               <MyProfileIcon className="fill-current w-5 h-5 absolute left-1 insest-y-1"/>
               MyProfile</Link> </div>
          <div  className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block text-white hidden hover:text-black"> 
          <Link to="/login" className="">
              <LoginIcon className="fill-current w-4 h-4 absolute left-2 top-1"/>
              Login</Link></div>
             </div>
         </nav>
         </div>
         );
    }
}
 
export default Navbar;