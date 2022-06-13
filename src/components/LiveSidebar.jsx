import React, { useState, useEffect } from "react";
import LiveCompetitions from "./LiveCompetions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const LiveSidebar = ({ handlechange }) => {
  const [indexOfFirstPost, setFirstPost] = useState(0);
  const [indexOfLastPost, setLastPost] = useState(7);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:5000/match/live").then((response) => {
        setPosts(response.data);
      });
    };
    fetchData();
  }, []);
  const HandleUpperArrow = () => {
    if (indexOfFirstPost > 0) {
      setFirstPost(indexOfFirstPost - 1);
      setLastPost(indexOfLastPost - 1);
    }
  };
  const HandleLowerArrow = () => {
    if (indexOfLastPost < posts.length - 1) {
      setFirstPost(indexOfFirstPost + 1);
      setLastPost(indexOfLastPost + 1);
    }
  };
  const CurrentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className=" bg-gray-100 flex flex-col justify between w-64 space-y-6 overflow-hidden h-full absolute py-10">
      <button
        className="border border-gray-200 w-6 ml-24 bg-gray-200"
        onClick={HandleUpperArrow}
      >
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </button>
      {CurrentPosts.map((item) => {
        return (
          <LiveCompetitions
            key={item.id}
            name={item.competition.name}
            id={item.id}
            handleclick={handlechange}
          />
        );
      })}
      <button
        className="border border-gray-200 w-6 ml-24 bg-gray-300"
        onClick={HandleLowerArrow}
      >
        <FontAwesomeIcon icon={faArrowAltCircleDown} />
      </button>
    </div>
  );
};
export default LiveSidebar;
