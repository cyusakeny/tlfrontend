import React, { Component } from "react";
import { Link } from "react-router-dom";
import LiveSidebar from "../components/LiveSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faKeyboard,
  faSearch,
  faUsers,
  faBorderAll,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "../images/stephen-curry.jpg";
import LiveCompetitors from "../components/LiveCompetitors";
import CompetitionImage from "../images/bats.jpg";
import { SocketContext } from "../utils/socketConnection";
import axios from "axios";
class LivePage extends Component {
  state = {
    presentationdata: [],
    roomid: "",
    competition: "Competition Name",
    user: "",
    displayData: true,
  };
  componentDidMount() {
    if (this.state.user === "") {
      const token = localStorage.getItem("token");
      axios
        .get("https://tlserver.herokuapp.com/users/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.setState({
            user: response.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
    this.ReceiveData();
  }
  ReceiveData = async () => {
    if (!this.context.connected) {
      this.context.connect();
    }
    this.context.on("OurData", async (personalInfo, roomId) => {
      console.log("Room Receeived:", roomId);
      if (this.state.roomid !== roomId) {
        this.setState({
          presentationdata: [],
        });
      } else {
        this.setState({
          presentationdata: [...personalInfo],
        });
      }
    });
  };
  Handleclick = (roomid, name) => {
    if (!this.context.connected) {
      this.context.connect();
    }
    this.context.emit("CreateRoom", roomid);
    console.log("room:", this.state.roomid);
    this.setState({
      roomid: roomid,
      competition: name,
      displayData: true,
    });
    this.setState({
      presentationdata: [],
    });
  };
  render() {
    let information = [...this.state.presentationdata];
    if (this.state.displayData === true) {
      return (
        <div className="">
          <div className="bg-gray-100   absolute h-full w-full overflow-auto">
            <div
              className=" pl-16 flex flex-row space-x-16  ml-99.2
               w-2/5 mt-3 "
            >
              <Link
                className=" hover:bg-gray-100 w-24 pl-2 h-7 mt-1 
                  rounded-md shadow-md bg-white"
                to="/"
              >
                <FontAwesomeIcon icon={faHome} className="mr-1" />
                Home
              </Link>
              <Link
                className=" hover:bg-gray-100 w-24 pl-2 h-7 mt-1
                  rounded-md shadow-md bg-white"
                to="/typing/train"
              >
                <FontAwesomeIcon icon={faKeyboard} className="mr-1" />
                Typing
              </Link>
              <Link
                className="hover:bg-gray-100 rounded-xl pt-1 w-36 h-10 ml-10 hover:shadow-lg"
                to=""
              >
                <div className=" flex flex-row w-36 pl-8 ">
                  <img
                    src={ProfileImage}
                    alt="Profile"
                    className="rounded-full w-8 h-8"
                  />
                  <div className="-mt-0.5 flex flex-col">
                    <h1 className="text-black text-sm  w-12  pl-1 self-start">
                      {this.state.user.username}
                    </h1>
                    <p className="self-start text-xs text-gray-600">Pro User</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" ml-72 flex flex-row space-x-10 mt-8">
              <p className=" w-28 px-2 rounded-md bg-white shadow-md text-gray-600 hover:bg-gray-800 hover:text-gray-100">
                <FontAwesomeIcon icon={faBorderAll} /> Round 16
              </p>
              <p className=" w-28 px-2 rounded-md bg-white shadow-md text-gray-600 hover:bg-gray-800 hover:text-gray-100">
                {" "}
                <FontAwesomeIcon icon={faGamepad} /> Game 17
              </p>
            </div>
            <div className=" relative  w-72  ml-99.2 -mt-6">
              <form action="" className="flex flex-row">
                <button
                  className="shadow-md rounded-l-md border-gray-100 border-r
                w-8 h-7 bg-white "
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-500 absolute left-1.5 top-1.5"
                  />
                </button>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                  className="outline-none shadow-md
                 placeholder-gray-500 rounded-r-lg"
                />
              </form>
            </div>
            <div className="overflow-auto bg-white ml-72 h-full mt-10 shadow-lg mr-8 space-y-2">
              <div className="py-8 flex flex-row space-x-32">
                <p className="font-bold ml-20 text-2xl">
                  100 <FontAwesomeIcon icon={faUsers} /> PLAYERS
                </p>
                <p className="text-gray-600 text-4xl flex flex-row">
                  <img
                    src={CompetitionImage}
                    alt="Competition logo"
                    className="rounded-full w-10 h-10"
                  />
                  {this.state.competition}
                </p>
              </div>
              <div
                className="flex flex-row text-gray-700 border border-white hover:border-gray-300 hover:shadow-md 
               bg-gray-100"
              >
                <p className="pt-1 ml-2 w-16">Rank</p>
                <p className="pt-1 ml-4 w-36">Name</p>
                <p className="pt-1 ml-4 w-12">Speed</p>
                <p className="pt-1 ml-8 w-12">Accuracy</p>
                <p className="pt-1 ml-12 w-20">Score</p>
                <p className="pt-1 ml-3 w-24">Country</p>
                <p className="pt-1 w-16 ml-12">Level</p>
                <p className="pt-1 ml-24">Quote</p>
              </div>
              {information.map((value, index) => {
                return (
                  <LiveCompetitors
                    speed={value.speed}
                    score={value.score}
                    accuracy={value.accuracy}
                    name={value.name}
                    key={index}
                    rank={index}
                  />
                );
              })}
            </div>
          </div>
          <LiveSidebar handlechange={this.Handleclick} />
        </div>
      );
    } else {
      return (
        <div className="">
          <div className="bg-gray-100   absolute h-full w-full overflow-auto">
            <p className="text-3xl ml-96 mt-16">Click on Match To View Match</p>
          </div>
          <LiveSidebar handlechange={this.Handleclick} />
        </div>
      );
    }
  }
}
LivePage.contextType = SocketContext;
export default LivePage;
