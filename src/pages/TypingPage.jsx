import React, { Component } from "react";
import Category from "../components/category";
import Preview from "../components/Preview";
import SideBar from "../components/SideBar";
import { SocketContext } from "../utils/socketConnection";
import pic1 from "../images/bats.jpg";
import pic2 from "../images/audi.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
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
  roomid: "",
  displayData: false,
  user: "",
};
class TypingPage extends Component {
  state = initialState;
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token !== null && this.state.displayData === false) {
      this.setState({
        roomid: this.props.match.params.room,
        displayData: true,
      });
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
              user: response.data.username,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }
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
    if (!this.context.connected) {
      this.context.connect();
    }
    if (this.state.speed !== 0 || this.state.accuracy !== 0) {
      this.setState({
        speed: 0,
        accuracy: 0,
      });
    }
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
        this.context.disconnect();
        clearInterval(intervalId);
        this.sendData();
        this.setState((prevState) => {
          return {
            Canceled: !prevState.Canceled,
            speed: 0,
            accuracy: 0,
          };
        });
      }
      console.log("Our rooms:", this.state.roomid);
      if (this.state.roomid !== "train") {
        this.context.emit(
          "Data1",
          this.state.speed,
          this.state.accuracy,
          this.state.roomid,
          this.state.user
        );
      }
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
  CheckIfIsNull = async (speed, accuracy) => {
    if (isNaN(speed) === true || isNaN(accuracy) === true) {
      this.setState((prevState) => {
        return {
          speed: 10,
          accuracy: 60,
        };
      });
      const score =
        ((this.state.speed - this.state.missingWord) * this.state.accuracy) /
        1000;
      console.log("Speed:", this.state.speed);
      console.log("Accuracy:", this.state.accuracy);
      return score;
    } else {
      return (
        ((this.state.speed - this.state.missingWord) * this.state.accuracy) /
        1000
      );
    }
  };
  sendData = async () => {
    const token = localStorage.getItem("token");
    this.CheckIfIsNull(this.state.speed, this.state.accuracy)
      .then(async (score) => {
        let level;
        if (this.state.roomid === "train") {
          if (score <= 40) {
            level = "JUNIOR";
          } else if (score <= 80 && score > 40) {
            level = "PROFFESSOR";
          } else {
            level = "EXPERT";
          }
          await axios({
            method: "POST",
            url: "https://tlserver.herokuapp.com/progress/add",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            data: {
              level: level,
            },
          });
        } else {
          await axios({
            method: "POST",
            url: `https://tlserver.herokuapp.com/result/update/${this.state.roomid}`,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            data: {
              score: score,
            },
          });
        }
      })
      .catch((err) => {
        return err;
      });
  };
  render() {
    if (this.state.displayData === true) {
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
              <Preview
                text={this.state.text}
                userInput={this.state.userInput}
              />
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
TypingPage.contextType = SocketContext;
export default TypingPage;
