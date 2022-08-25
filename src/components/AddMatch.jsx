import React, { useState } from "react";
import TimePicker from "react-time-picker";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "../css/style.css"
// import "react-calendar/dist/Calendar.css";
import axios from "axios";

const AddMatch = (props) => {
  const [time, ChangeTime] = useState("00:00");
  const [date, ChangeDate] = useState(new Date());
  const [emails, setEmails] = useState([]);
  const [saved, setSent] = useState(false);
  const SendData = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "https://tlserver.herokuapp.com/match/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        competition: props.competition,
        status: "UPCOMING",
        date: date,
        time: time,
        users: emails,
      },
    })
      .then(() => {
        setSent(true);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  if (saved === false) {
    return (
      <div className="bg-white text-black w-1/3 text-black border-2 ml-40 pt-8 shadow-lg rounded-lg mt-10">
        <h1 className=" absolute left-72 top-14 font-sans text-xl text-gray-600">
          Add match
        </h1>
        <div className="">
        <input
            type="date"
            name="enddate"
            id="enddate"
            className="w-96 border-gray-300 mx-6 mt-16  border rounded-sm outline-none text-gray-500"
            onChange={(e) => {
              ChangeDate(e.target.value);
            }}
          />
          <TimePicker
            onChange={ChangeTime}
            value={time}
            className="h-auto w-3 mt-10 mb-10 mx-6"
          />
        </div>
        <ReactMultiEmail
          placeholder="Players Emails"
          emails={emails}
          onChange={(_emails) => {
            setEmails(_emails);
          }}
          validateEmail={(email) => {
            return isEmail(email);
          }}
          getLabel={(email, index, removeEmail) => {
            return (
              <div data-tag key={index}>
                {email}
                <span data-tag-handle onClick={() => removeEmail(index)}>
                  ×
                </span>
              </div>
            );
          }}
          className="ml-12"
        />

        <button
          className="bg-black text-white text-sm w-32 h-12 rounded-md mt-2 ml-32"
          onClick={SendData}
        >
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className="bg-white text-black w-1/3 text-black border-2 ml-40 pt-8 shadow-lg rounded-lg mt-10">
        <div className="  p-6 text-black relative ">
          <p className="text-3xl">Your match is set up</p>
        </div>
      </div>
    );
  }
};
export default AddMatch;
