import React, { Component } from "react";
import MatchList from "../components/MatchList";
import SideBar from "../components/SideBar";
import { faRegistered, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as SortIcon } from "/home/keny/tlfrontend/src/images/sort.svg";
import Popup from "../components/Popup";
import AddMatch from "../components/AddMatch";
class ViewMatches extends Component {
  state = {
    popup: false,
    iconpop: "hidden",
  };
  PopupDisplay = () => {
    this.setState({
      popup: true,
      iconpop: "visible",
    });
  };
  render() {
    return (
      <div className="">
        <SideBar />
        <div className="bg-gray-200  ml-46 absolute h-full w-101 overflow-hidden ">
          <button
            className=" right-16 w-32 text-xl
           h-auto bg-white rounded-lg hover:bg-gray-300 top-10 absolute"
            onClick={this.PopupDisplay}
          >
            <FontAwesomeIcon icon={faRegistered} className="w-5 h-5" />
            Add Match
          </button>
          <div className=" flex flex-row mt-10 space-x-32 ml-12 ">
            <p className=" text-xl w-20 relative">
              Date
              <SortIcon className="absolute left-12 w-8 h-6 top-0.5 " />
            </p>
            <p className="text-xl  w-20 relative">
              Time
              <SortIcon className="absolute left-12 w-8 h-6 top-0.5 " />
            </p>
            <p className="text-xl  w-16 relative">Round</p>
            <p className="text-xl  w-16 relative">Participants</p>
          </div>
          <MatchList />
          <MatchList />
          <MatchList />
          <MatchList />
          <MatchList />
          <MatchList />
          <MatchList />
          <Popup trigger={this.state.popup}>
            <AddMatch></AddMatch>
          </Popup>
          <button
            className="absolute top-14 h-auto bg-white border-b-gray-700 border-b-2
             left-60 rounded-lg px-2 w-8 hover:bg-gray-300"
            style={{ visibility: this.state.iconpop }}
          >
            <FontAwesomeIcon
              icon={faLessThan}
              className=" fill-current text-blue-600 mt-1.5"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ViewMatches;
