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
            <div className="bg-black overflow-hidden h-full w-full absolute left-0">
            <Navbar/>
            {/* Typing lord and quote */}
            <div className="sm:pb-8 pb-2 sm:pl-20 pl-1 sm:mt-12 mt-1 sm:ml-96 ml-2"> 
              <p className="sm:ml-64 ml-1  sm:text-7xl text-7xl font-sans text-white">TYPING</p>
              <p className="sm:-mt-16.3 sm:ml-98 ml-10 sm:text-7xl text-3xl text-yellow-color font-postcolombo">LORD</p>
              <p className="sm:mt-8 mt-12 sm:ml-63 w-97 ml-1 text-white text-xl">Learn How To Type Wherever you are  However you are and Whoever
              you are Whatever you do just do it with hardwork and passion Give your one hundred percent something will workout in the end
              </p>
            </div>
            {/* Image */}
            <div className="sm:-mt-60 mt-2 sm:pb-8 pb-12">
            <img src={keyimage} className="sm:ml-20 sm:w-600 sm:h-295 w-72 h-28 ml-4"  alt="keyboardimage" />
            </div>
            {/* Social medias */}
            <div className="flex flex-row  sm:ml-20 sm:mt-16 ml-12">
            <Link to=""> <FacebookIcon className="fill-current text-yellow-color w-6 h-6 mr-12"/></Link> 
            <Link to=""><InstaIcon className="fill-current text-yellow-color w-6 h-6 mr-12"/></Link>
            <Link to=""><TwitterIcon className="fill-current text-yellow-color w-6 h-6 mr-12"/></Link>
            </div>
            {/* Contact us */}
             <div className="-mt-36  float-right flex justify-end mr-36 space-x-8 ">
            <Link to="" className=" border w-56 px-1.5 border-yellow-color  pt-1 relative 
            bg-yellow-color text-black flex flex-row hover:bg-black hover:text-white rounded">
            <p className="font-mono text-3xl">Get started</p> </Link>
            <Link to="" className="border w-52 border-yellow-color  pl-7 pt-0.5 
            rounded-xl bg-yellow-color text-black flex flex-row hover:bg-black hover:text-white">
            <p className="font-mono text-3xl">Contact</p> </Link>
             </div>
                       </div>
        );
    }
}
 
export default HomePage;