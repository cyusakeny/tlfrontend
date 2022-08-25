import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import ProfileImage from "../images/avatar.png";
import Popup from "../components/Popup";
import { ReactComponent as EditSvg } from "../images/edit-button.svg";
import Edit from "../components/Edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const initialState = {
  row1: "Name",
  row2: "Gender",
  row3: "Email",
  row4: "Firstname",
  row5: "Lastname",
  data1: "",
  data2: "",
  data3: "",
  data4: "",
  data5: "",
  border1: "2px solid black",
  border2: "",
  color1: "black",
  color2: "#063557",
  picture: false,
  src: ProfileImage,
  pop: false,
  popicon: "hidden",
  userdata: "",
  login: false,
};
class MyProfile extends Component {
  state = initialState;
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token != null) {
      axios
        .get("https://tlserver.herokuapp.com/users/user", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.setState({
            userdata: response.data,
            data1: response.data.username,
            data2: response.data.gender,
            data3: response.data.email,
            data4: response.data.firstname,
            data5: response.data.lastname,
            login: true,
          });
           if(this.state.image!==null){
            this.setState({
              src:"https://tlserver.herokuapp.com/"+response.data.image
            })
           }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  changeToAbout = () => {
    this.setState({
      row1: "Name",
      row2: "Gender",
      row3: "Email",
      row4: "Firstname",
      row5: "Lastname",
      data1: this.state.userdata.username,
      data2: this.state.userdata.gender,
      data3: this.state.userdata.email,
      data4: this.state.userdata.firstname,
      data5: this.state.userdata.lastname,
      border1: "2px solid black",
      border2: "",
      color1: "black",
      color2: "#063557",
    });
  };
  changeToProgress = () => {
    this.setState({
      row1: "Time",
      row2: "Speed",
      row3: "Accuracy",
      row4: "Level",
      row5: "Punctuality",
      data1: 12 + "Min",
      data2: 70 + "WPM",
      data3: 90 + "%",
      data4: "Middle",
      data5: "Excellent",
      border1: "",
      border2: "2px solid black",
      color1: "#063557",
      color2: "black",
    });
  };
  handlePictureUpload = (e) => {
    var picture = e.target.files[0];
    var src = URL.createObjectURL(picture);

    this.setState({
      picture: picture,
      src: src,
    });
  };
  OpenPopup = () => {
    this.setState({
      pop: true,
      popicon: "visible",
    });
  };
  closePopup = () => {
    this.setState({
      pop: false,
      popicon: "hidden",
    });
  };
  render() {
    if (this.state.login === true) {
      return (
        <div className="">
          <SideBar />
          <div className="bg-gray-100  ml-46 absolute h-full w-101 overflow-hidden">
            <div className="w-36 mt-10 h-32 ml-48">
              <img src={this.state.src} alt="ProfileImage" />

              <label className=" flex flex-col border border-gray-color bg-gray-color items-center hover:text-white hover:bg-blue-color  w-36 px-2">
                <span className="">Profile Pic</span>
              </label>
            </div>
            <div className="w-64 ml-96.50 -mt-32 font-sans max-w-xl">
              <p className="text-5xl ">Unreal</p>
            </div>
            <div className="w-full  ml-96.50 mt-2 font-sans max-w-xl">
              <p className="text-xl text-blue-color-50">
                "Training to become the lord"
              </p>
            </div>
            <div className="flex flex-row space-x-2  w-full ml-96.50 mt-4 font-sans max-w-xl">
              <p className="text-3xl ">Rating:</p>
              <p className="text-2xl mt-1 text-red-800">Junior Typist</p>
            </div>

            <div className="flex flex-row w-9/12 space-x-40 ml-96.50 mt-6 font-sans max-w-xl border-b-2 border-gray-400">
              <span
                className="text-xl text-black  pl-4 -mb-0.5 border-blue-color-150 w-24"
                style={{
                  color: this.state.color1,
                  borderBottom: this.state.border1,
                  cursor: "pointer",
                }}
                onClick={this.changeToAbout}
              >
                About
              </span>
              <span
                className="text-xl text-blue-color-100"
                style={{
                  color: this.state.color2,
                  borderBottom: this.state.border2,
                  cursor: "pointer",
                }}
                onClick={this.changeToProgress}
              >
                Progress
              </span>
            </div>
            <div className="flex flex-row w-9/12 ml-96.50 mt-2 font-sans max-w-xl ">
              <p className="text-xl w-24">{this.state.row1}</p>
              <p className=" ml-40 text-xl w-52 text-blue-color-200">
                {this.state.data1}
              </p>
            </div>
            <div className="flex flex-row w-9/12 ml-96.50 mt-2 font-sans max-w-xl ">
              <p className="text-xl w-24">{this.state.row2}</p>
              <p className=" ml-40 text-xl w-24 text-blue-color-200">
                {this.state.data2}
              </p>
            </div>
            <div className="flex flex-row w-9/12 ml-96.50 mt-2 font-sans max-w-xl ">
              <p className="text-xl w-24">{this.state.row3}</p>
              <p className=" ml-40 text-xl w-80 text-blue-color-200">
                {this.state.data3}
              </p>
            </div>
            <div className="flex flex-row w-9/12 ml-96.50 mt-2 font-sans max-w-xl ">
              <p className="text-xl w-24">{this.state.row4}</p>
              <p className=" ml-40 text-xl w-52 text-blue-color-200">
                {this.state.data4}
              </p>
            </div>
            <div className="flex flex-row w-9/12 ml-96.50 mt-2 font-sans max-w-xl ">
              <p className="text-xl w-24">{this.state.row5}</p>
              <p className=" ml-40 text-xl w-52 text-blue-color-200 h-0">
                {this.state.data5}
              </p>
            </div>
            <div
              className="w-24  bg-blue-color-250 relative ml-96.50 mt-10 pl-10 rounded-md "
              onClick={this.OpenPopup}
            >
              <button>
                <EditSvg className="fill-current text-white w-3 h-4 absolute left-7 top-1" />
                Edit
              </button>
            </div>
            <Popup trigger={this.state.pop}>
              <Edit image={this.state.src}/>
            </Popup>
            <FontAwesomeIcon
              icon={faLessThan}
              className=" absolute left-96 top-12 w-3 h-4"
              style={{ visibility: this.state.popicon ,cursor:"pointer" }}
              onClick={this.closePopup}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="">
          <SideBar />
          <div className="bg-gray-100  ml-46 absolute h-full w-101 overflow-hidden">
            <Link
              to={"/login"}
              className="left-96  bg-black p-6 text-white relative top-56"
            >
              Login
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default MyProfile;
