import React, { useState } from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/style.css";
import "react-calendar/dist/Calendar.css";

const AddMatch = () => {
  const [time, ChangeTime] = useState("00:00");
  const [date, ChangeDate] = useState(new Date());
  const [emails, setEmails] = useState([]);
  return (
    <div className="bg-white text-black w-1/3 text-black border-2 ml-40 pt-8 shadow-lg rounded-lg mt-10">
      <h1 className=" absolute left-72 top-14 font-sans text-xl text-gray-600">
        Add match
      </h1>
      <div className="">
        <Calendar
          onChange={ChangeDate}
          value={date}
          className="h-32 overflow-auto w-3 mt-10 ml-10"
        />
        <TimePicker
          onChange={ChangeTime}
          value={time}
          className="h-auto w-3 mt-10 mb-10 ml-10"
        />
      </div>
      <ReactMultiEmail
        placeholder="placeholder"
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
    </div>
  );
};
export default AddMatch;
