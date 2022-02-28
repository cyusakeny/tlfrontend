import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import ProfileImage from "/home/keny/tlfrontend/src/images/avatar.png";
import Popup from "../components/Popup";
import { ReactComponent as EditSvg } from "/home/keny/tlfrontend/src/images/edit-button.svg";
import Edit from "../components/Edit";
const initialState = {
  row1: "Name",
  row2: "Gender",
  row3: "Email",
  row4: "Country",
  row5: "Professional",
  data1: "UnrealDrift",
  data2: "Male",
  data3: "UnrealDrift@gmail.com",
  data4: "Rwanda",
  data5: "Software Developer",
  border1: "2px solid black",
  border2: "",
  color1: "black",
  color2: "#063557",
  picture: false,
  src: ProfileImage,
};
class MyProfile extends Component {
  state = initialState;
  changeToAbout = () => {
    this.setState({
      row1: "Name",
      row2: "Gender",
      row3: "Email",
      row4: "Country",
      row5: "Professional",
      data1: "UnrealDrift",
      data2: "Male",
      data3: "UnrealDrift@gmail.com",
      data4: "Rwanda",
      data5: "Software Developer",
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
  render() {
    return (
      <div className="">
        <SideBar />
        <div className="bg-gray-100  ml-46 absolute h-full w-101 overflow-hidden">
          <div className="w-36 mt-10 h-32 ml-48">
            <img src={this.state.src} alt="ProfileImage" />

            <label className=" flex flex-col border border-gray-color bg-gray-color items-center hover:text-white hover:bg-blue-color  w-36 px-2">
              <span className="">Change Photo</span>
              <input
                type="file"
                name="ProfileImage"
                id="ImageId"
                className="hidden"
                onChange={this.handlePictureUpload}
              />
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
            <Link
              className="text-xl text-black  pl-4 -mb-0.5 border-blue-color-150 w-24"
              style={{
                color: this.state.color1,
                borderBottom: this.state.border1,
              }}
              onClick={this.changeToAbout}
            >
              About
            </Link>
            <Link
              className="text-xl text-blue-color-100"
              style={{
                color: this.state.color2,
                borderBottom: this.state.border2,
              }}
              onClick={this.changeToProgress}
            >
              Progress
            </Link>
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
          <div className="w-24  bg-blue-color-250 relative ml-96.50 mt-10 pl-10 rounded-md ">
            <Link to="" className="text-xl text-white">
              <EditSvg className="fill-current text-white w-5 h-5 absolute left-4 top-1 bottom-1" />
              Edit
            </Link>
          </div>
          <Popup trigger={true}>
            <Edit></Edit>
          </Popup>
        </div>
      </div>
    );
  }
}

export default MyProfile;
