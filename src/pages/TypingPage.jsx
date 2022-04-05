import React, { Component } from "react";
import Category from "../components/category";
import Popup from "../components/Popup";
import Preview from "../components/Preview";
import SideBar from "../components/SideBar";
import { SocketContext } from "../utils/socketConnection";
import pic1 from "../images/bats.jpg";
import pic2 from "../images/audi.jpg";
const initialState = {
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam   nihil, eveniet aliquid culpa officia aut!`,
  minutes: 2,
  seconds: 30,
  userInput: "",
  speed: 0,
  accuracy: 0,
  missingWord: 0,
  userFinished: false,
  selectedValue: "",
  Canceled: false,
  popup: true,
  roomid: "",
};
class TypingPage extends Component {
  state = initialState;
  calcutateSpeed = () => {
    const GivenTime = 2.5,
      currentTime = this.state.minutes + this.state.seconds / 60;
    const TimeUsed = GivenTime - currentTime,
      CurrentSpeed = Math.round(this.state.userInput.length / TimeUsed);
    this.setState({
      speed: CurrentSpeed,
    });
  };
  calculateAccuracy = () => {
    let NumberOfInaccurate = 0;
    let Percentage = 0,
      GivenText = this.state.text.split(""),
      userText = this.state.userInput.split("");
    for (let i = 0; i < this.state.userInput.length; i++) {
      if (GivenText[i] !== userText[i]) {
        NumberOfInaccurate++;
      }
    }
    Percentage = Math.round(
      ((this.state.userInput.length - NumberOfInaccurate) /
        this.state.userInput.length) *
        100
    );
    this.setState({
      accuracy: Percentage,
      missingWord: NumberOfInaccurate,
    });
  };

  startTimer = () => {
    const intervalId = setInterval(() => {
      this.calcutateSpeed();
      this.calculateAccuracy();
      if (this.state.seconds !== 0) {
        this.setState((prevState) => {
          return {
            seconds: prevState.seconds - 1,
          };
        });
      }
      if (this.state.seconds === 0 && this.state.minutes !== 0) {
        this.setState((prevState) => {
          return {
            minutes: prevState.minutes - 1,
            seconds: prevState.seconds + 60,
          };
        });
      }
      if (
        (this.state.seconds === 0 && this.state.minutes === 0) ||
        this.state.userFinished ||
        this.state.Canceled
      ) {
        this.setState((prevState) => {
          return {
            Canceled: !prevState.Canceled,
          };
        });
        this.context.disconnect();
        clearInterval(intervalId);
      }
      this.context.emit(
        "Data1",
        this.state.speed,
        this.state.accuracy,
        this.state.roomid
      );
    }, 1000);
  };
  onUserinputChange = (e) => {
    const inputText = e.target.value;
    this.setState({
      userInput: inputText,
    });
    if (this.state.text.length === this.state.userInput.length) {
      this.setState({
        userFinished: true,
      });
    }
  };
  HandleCancel = () => {
    this.StopTimer();
    setTimeout(() => {
      this.setState({
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut!`,
        minutes: 2,
        seconds: 30,
        userInput: "",
        speed: 0,
        accuracy: 0,
        missingWord: 0,
        userFinished: false,
      });
    }, 500);
  };

  StopTimer = () => {
    this.setState({
      Canceled: true,
    });
  };
  HandleInputChange = (event) => {
    this.setState({
      selectedValue: event.target.value,
    });
  };
  HandleCompetitions = () => {
    if (this.state.selectedValue === "Training") {
      return <Category src={pic2} data="Maestro" />;
    } else if (this.state.selectedValue === "Competition") {
      return <Category src={pic1} data="Bats Competition" />;
    }
  };
  ClosePopup = () => {
    this.setState({
      popup: false,
    });
    if (this.state.selectedValue === "Training") {
      this.setState({
        roomid: "room1",
      });
    } else if (this.state.selectedValue === "Competition") {
      this.setState({
        roomid: "room2",
      });
    }
  };
  render() {
    return (
      <div className="">
        <SideBar />
        <div className="bg-gray-200  ml-46 absolute h-full w-101 overflow-hidden ">
          <div className=" flex flex-row pl-80 space-x-7 mt-4 border-b-2 border-gray-400">
            <h1 className="text-7xl font-sans">TYPING</h1>
            <h1 className="text-lord font-postcolombo -mt-2 text-yellow-color">
              LORD
            </h1>
          </div>
          <div className=" mt-6 ml-40 mr-96 h-80 bg-gray-400 pt-6">
            <Preview text={this.state.text} userInput={this.state.userInput} />
            <textarea
              className="mt-6 ml-24 w-96 h-24 border-2 border-black "
              value={this.state.userInput}
              onChange={this.onUserinputChange}
              placeholder="Start Typing here......"
              style={{ resize: "none", outline: "none", overflow: "hidden" }}
            ></textarea>
          </div>
          <div className="border border-black bg-white ml-100 w-20 pl-2 -mt-80 h-10 pb-2 rounded-lg">
            <p className="text-3xl">
              {this.state.minutes}:
              {this.state.seconds < 10
                ? "0" + this.state.seconds
                : this.state.seconds}
            </p>
          </div>
          <div className=" ml-100 mt-1 w-32 pl-0.5  h-6 ">
            <p className="text-lg">Time left</p>
          </div>
          <div className="border border-black bg-white ml-100 w-20 pl-1 mt-6 h-8 pb-1 rounded-lg">
            <p className="text-lg">{this.state.speed}WPM</p>
          </div>
          <div className=" ml-100 mt-1 w-32 pl-0.5  h-8 ">
            <p className="text-lg">Speed</p>
          </div>
          <div className="border border-black bg-white ml-100 w-20 pl-6 mt-6 h-8 pb-1 rounded-lg">
            <p className="text-lg">{this.state.accuracy}%</p>
          </div>
          <div className=" ml-100 mt-1 w-32 pl-0.5  h-8 ">
            <p className="text-lg">Accuracy</p>
          </div>
          <div className="border border-black bg-white ml-100 w-20 pl-2 mt-6 h-8 pt-1 rounded-lg">
            <p className="text-sm">{this.state.missingWord} words</p>
          </div>
          <div className=" ml-100 mt-1 w-32 pl-0.5  h-8 ">
            <p className="text-lg">Missed Words</p>
          </div>
          <div className=" ml-99.5 flex flex-row space-x-2 mt-8">
            <button
              type="submit"
              className="font-sans border border-green-500 bg-green-500 w-20 h-8 hover:bg-green-900 hover:border-green-900 rounded-lg text-white"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="submit"
              className="font-sans border border-blue-color bg-blue-color hover:bg-blue-900 hover:border-blue-900  w-20 h-8 rounded-lg text-white"
            >
              Next
            </button>
            <button
              type="submit"
              className="font-sans border border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700  w-20 h-8 rounded-lg text-white"
              onClick={this.HandleCancel}
            >
              Cancel
            </button>
          </div>
          <Popup trigger={this.state.popup}>
            <div
              className="bg-gray-800 relative w-6.5 text-black h-96 ml-80 shadow-2xl shadow-white
             rounded-lg mt-10"
            >
              <label className="font-sans text-gray-200 absolute top-5 left-36">
                Select Category
              </label>
              <select
                value={this.state.selectedValue}
                className="border-2 border-gray-300 w-32 bg-white rounded-lg absolute top-12 left-36 outline-none"
                onChange={this.HandleInputChange}
              >
                <option value="" selected disabled>
                  Category
                </option>
                <option value="Training">Training</option>
                <option value="Competition">Competition</option>
              </select>
              <div
                className="absolute top-24 left-32 w-3/4 h-auto px-4
              rounded-lg "
              >
                {this.HandleCompetitions()}
              </div>
              <button
                className=" bg-green-300 absolute left-40 bottom-16 px-2 rounded-xl"
                onClick={this.ClosePopup}
              >
                Continue
              </button>
            </div>
          </Popup>
        </div>
      </div>
    );
  }
}
TypingPage.contextType = SocketContext;
export default TypingPage;
