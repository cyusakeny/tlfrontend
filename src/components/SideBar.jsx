import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faKeyboard,
  faHome,
  faChalkboardTeacher,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as LiveIcon } from "/home/keny/tlfrontend/src/images/live.svg";
const SideBar = () => {
  const history = useHistory();
  const Logout = () => {
    let path = "/login/";
    localStorage.removeItem("token");
    history.push(path);
  };
  return (
    <div className="">
      <nav>
        <div className="bg-black flex flex-col justify between mr-600 overflow-hidden h-full absolute ">
          <div className=" mt-8 relative text-white pl-6 pr-0.5 ml-8 mr-20 rounded-md hover:bg-yellow-color text-white hover:text-black">
            <Link to="/" className="">
              <FontAwesomeIcon
                icon={faHome}
                className="fill-current   w-5 h-5 absolute left-1 insest-y-1"
              />
              HOME
            </Link>
          </div>
          <div className="  mt-12 text-white relative pl-6 ml-8 mr-20 pr-0.5 rounded-md hover:bg-yellow-color text-white hover:text-black">
            <Link to="/typing/train" className="">
              <FontAwesomeIcon
                icon={faKeyboard}
                className="fill-current w-5 h-5 absolute left-1 insest-y-1"
              />
              TYPE
            </Link>
          </div>
          <div className="  mt-12 relative text-white pl-6 ml-8 mr-12 pr-0.5 rounded-md hover:bg-yellow-color text-white hover:text-black">
            <Link to="/courses" className="">
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                className="fill-current w-5 h-5 absolute left-1 insest-y-1"
              />
              COURSES
            </Link>
          </div>
          <div className="  mt-12 relative text-white pl-6 ml-8 mr-4 pr-0.5 rounded-md hover:bg-yellow-color text-white hover:text-black">
            <Link to="/Competitions" className="">
              <FontAwesomeIcon
                icon={faTrophy}
                className="fill-current w-5 h-5 absolute left-1 insest-y-1"
              />
              COMPETITION
            </Link>
          </div>
          <div className="  mt-12 text-white relative pl-6 ml-8 mr-8 pr-0.5 rounded-md hover:bg-yellow-color text-white hover:text-black">
            <Link to="/myprofile" className="">
              <FontAwesomeIcon
                icon={faUser}
                className="fill-current  w-5 h-5 absolute left-1 insest-y-1"
              />
              MYPROFILE
            </Link>
          </div>
          <div className=" mt-12 text-white relative pl-6 pr-0.5 ml-8 mr-20 rounded-md hover:bg-yellow-color  hover:text-black">
            <Link to="/live" className="">
              <LiveIcon className="stroke-current stroke-2 fill-current w-5 h-5 absolute left-1 insest-y-1" />
              LIVE
            </Link>
          </div>
          <div
            className=" mt-12 text-white relative pl-6 pr-6 ml-8 mr-20 rounded-md hover:bg-yellow-color  hover:text-black"
            onClick={Logout}
          >
            <button className="">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="fill-current  w-5 h-6 absolute left-1 insest-y-2"
              />
              LOGOUT
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
