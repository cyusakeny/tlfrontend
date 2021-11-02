import React, { Component } from 'react';
import LiveSidebar from '../components/LiveSidebar';
class LivePage extends Component {
    render() { 
        return <div className="flex flex-row bg-gray  bg-gray-300">
            <LiveSidebar/>
            <div className="ml-80 relative">
                
<input type="text" name="" id="" placeholder="&#xF199;Search" className="outline-none"/>
            </div>
       <div className="bg-red-300 ml-80 h-96">
           kenyy
       </div>
        </div>;
    }
}
 
export default LivePage;