import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import keyimage from '/home/keny/tlfrontend/src/images/keyboard.png';
import {ReactComponent as FacebookIcon} from '/home/keny/tlfrontend/src/images/facebook.svg';
import {ReactComponent as InstaIcon} from'/home/keny/tlfrontend/src/images/instagram.svg';
import {ReactComponent as TwitterIcon}from '/home/keny/tlfrontend/src/images/twitter.svg';
import {ReactComponent as PhoneIcon}from'/home/keny/tlfrontend/src/images/phone.svg';
import Navbar from '../components/Navbar';
class HomePage extends Component {
    render() { 
        return (  
            <div className="bg-mydarkcolor overflow-hidden h-full w-full absolute left-0">
            <Navbar/>
            <div className="sm:pb-8 pb-2 sm:pl-20 pl-1 sm:mt-20 mt-1 sm:ml-96 ml-2"> 
              <p className="sm:ml-64 ml-1  sm:text-9xl text-7xl font-sans text-white">TYPING</p>
              <p className="sm:mt-8 sm:ml-96 ml-10 sm:text-7xl text-5xl text-yellow-color font-postcolombo">LORD</p>
              <p className="sm:mt-16 mt-12 sm:ml-72  ml-1 text-white text-3xl">"With HardWork and Passion"</p>
            </div>
            <div className="sm:-mt-80 mt-2 sm:pb-8 pb-12">
            <img src={keyimage} className="sm:ml-20 sm:w-600 sm:h-275 w-72 h-28 ml-4 "  alt="keyboardimage" />
            </div>
            <div className="flex flex-row  sm:ml-20 sm:mt-24 mt-4 ml-12">
            <Link to=""> <FacebookIcon className="fill-current text-yellow-color w-12 h-12 mr-12"/></Link> 
            <Link to=""><InstaIcon className="fill-current text-yellow-color w-12 h-12 mr-12"/></Link>
            <Link to=""><TwitterIcon className="fill-current text-yellow-color w-12 h-12 mr-12"/></Link>
            </div>
            <div className=" flex sm:justify-end justify-start sm:mr-96 mr-0 sm:-mt-16 mt-2 sm:pb-8 pb-16">
            <div className=" relative pl-12 pr-4 sm:ml-0 ml-8 mt-4 bg-yellow-color rounded-sm">
            <Link to="" className="text-3xl"><PhoneIcon className="fill-current text-black w-8 h-8 absolute right-40 insest-y-1"/>
             Contact us</Link>
            </div>
            </div>
            </div>
        );
    }
}
 
export default HomePage;