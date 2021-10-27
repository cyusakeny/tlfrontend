import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import ViewWinnerList from '../components/ViewWinnerList';

class ViewWinners extends Component {
    render() { 
        return <div className="">
            <SideBar/>
            <div className="bg-gray-200  ml-46 absolute h-full w-101 overflow-auto">
<ViewWinnerList/>
<ViewWinnerList/>
<ViewWinnerList/>
<ViewWinnerList/>
<ViewWinnerList/>
<ViewWinnerList/>
<ViewWinnerList/>
<ViewWinnerList/>
<ViewWinnerList/>
            </div>

        </div>;
    }
}
 
export default ViewWinners;