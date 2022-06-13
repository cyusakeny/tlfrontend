import { React, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const AddCompetition = () => {
  const [name, setName] = useState("");
  const [Requirements, setRequirements] = useState([]);
  const [prices, setPrices] = useState([""]);
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [status, setStatus] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: "https://tlserver.herokuapp.com/competition/add",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      data: {
        name: name,
        begindate: begin,
        enddate: end,
        requirements: Requirements,
        prize: prices,
      },
    })
      .then(() => {
        setStatus(true);
      })
      .catch((err) => {
        console.log("err:", err);
      });
    console.log("Prices:", prices);
  };
  const NewLine = (e) => {
    if (e.target.name === "requirements") {
      const requirements = e.target.value;
      const required = requirements.split("\n").slice();
      setRequirements(required);
    }
    if (e.target.name === "prices") {
      const price = e.target.value;
      const tobe = price.split("\n").slice();
      setPrices(tobe);
    }
  };
  if (status === false) {
    return (
      <div className="bg-white text-black w-1/3 text-black border-2 ml-40 pt-8 shadow-lg rounded-lg mt-10">
        <h1 className=" absolute left-72 top-14 font-sans text-xl text-gray-600">
          Register Competition
        </h1>
        <form
          action="addcompetition"
          method="post"
          className="flex flex-col px-6 space-y-2 pb-10 mt-6"
          onSubmit={HandleSubmit}
        >
          <label className="font-sans text-gray-300">Name</label>
          <input
            type="text"
            name="compname"
            id="compid"
            className="w-96 border-gray-300 border rounded-sm outline-none"
            onChange={(e) => {
              setName(e.target.value) && console.log("Name:", name);
            }}
          />
          <label className="font-sans text-gray-300">Requirements</label>
          <textarea
            name="requirements"
            id="requirementsid"
            className="w-96 border-gray-300 border rounded-sm outline-none"
            style={{ resize: "none" }}
            onKeyPress={NewLine}
          ></textarea>
          <label className="font-sans text-gray-300">Prices</label>
          <textarea
            name="prices"
            id="priceid"
            className="w-96 border-gray-300 border rounded-sm outline-none"
            style={{ resize: "none" }}
            onMouseLeave={NewLine}
          ></textarea>
          <label className="font-sans text-gray-300">Begin date</label>
          <input
            type="date"
            name="begindate"
            id="begindate"
            className="w-96 border-gray-300 border rounded-sm outline-none text-gray-500"
            onChange={(e) => {
              setBegin(e.target.value) && console.log("Begin", begin);
            }}
          />
          <label className="font-sans text-gray-300">End date</label>
          <input
            type="date"
            name="enddate"
            id="enddate"
            className="w-96 border-gray-300 border rounded-sm outline-none text-gray-500"
            onChange={(e) => {
              setEnd(e.target.value) && console.log("End", end);
            }}
          />
          <button
            type="submit"
            className="h-12 rounded-md text-gray-700 w-32 text-md bg-gray-300 mt-4"
          >
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="bg-white text-black w-1/3 text-black border-2 ml-40 pt-8 shadow-lg rounded-lg mt-10">
        <h1 className="mt-10 mb-20 ml-6 mr-6 ">
          Your Competition Is Successfully Registered
          <FontAwesomeIcon icon={faCheckCircle} className="ml-3" />
        </h1>
      </div>
    );
  }
};
export default AddCompetition;
