import React, { Component } from 'react';
class LogSideBar extends Component {
    render() { 
        return (  
            <div className="bg-black flex flex-col justify between w-80 overflow-hidden h-full absolute">
         <p className="mt-44 text-white text-7xl ml-8 font-sans">TYPING</p>
         <p className="mt-4 text-lord font-postcolombo  text-yellow-color ml-16">LORD</p>
         <p className="mt-6 text-xl ml-6 text-white font-sans">"With HardWork And Passion"</p>
            </div>
        );
    }
}
 
export default LogSideBar;