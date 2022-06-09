import React from "react";
import { useHistory } from "react-router-dom";
const MatchList = (props) => {
  const history = useHistory();
  const ViewWinners = () => {
    let path = `/ViewWinners/${props.id}`;
    history.push(path);
  };
  const Play = () => {
    const today = new Date();
    const todayDate = new Date().toLocaleDateString();
    const todayTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const difference =
      new Date().getHours() - new Date("1970-01-01 " + props.time).getHours();

    if (props.date === todayDate) {
      if (props.time < todayTime && difference <= 2 && difference >= 0) {
        let path = `/typing/${props.id}`;
        history.push(path);
      } else if (difference > 2) {
        alert("you came late");
      } else {
        alert("you came early");
      }
    } else {
      console.log(props.date, "vs", todayDate);
      alert("You came  very early");
    }
  };
  return (
    <div className="border-2 rounded-lg flex flex-row mt-10  ml-10 mr-4 h-12 bg-white">
      <p className=" mr-2 w-32 mt-2 pl-2">{props.date}</p>
      <p className=" w-44 mr-12 mt-2 pl-16 ">{props.time} UTC</p>
      <p className="w-48 mr-20 mt-2 pl-12 ">{props.status}</p>
      <p className=" mr-32 mt-2 ">202</p>
      <button
        className="border  rounded mr-10 w-32 text-white bg-indigo-600 h-9 mt-1"
        onClick={ViewWinners}
      >
        View Winners
      </button>
      <button
        className="border  rounded mr-10 w-32 text-white bg-green-600 h-9 mt-1"
        onClick={Play}
      >
        Play
      </button>
    </div>
  );
};
export default MatchList;
