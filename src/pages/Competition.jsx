import { faRegistered, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddCompetition from "../components/AddCompetition";
import CompetitionList from "../components/CompetitionList";
import Popup from "../components/Popup";
import SideBar from "../components/SideBar";
import Pagination from "./Pagination";
import { ReactComponent as SortIcon } from "../images/sort.svg";
class CompetitionPage extends Component {
  state = {
    selectedValue: "",
    posts: [],
    CurrentPage: 1,
    PostsPerPage: 8,
    popup: false,
    iconpop: "hidden",
    login: false,
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token != null) {
      axios
        .get("https://tlserver.herokuapp.com/competition/all/", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.setState({
            posts: response.data,
            login: true,
          });
        })
        .catch((err) => {
          return err;
        });
    }
  }
  PopupDisplay = () => {
    this.setState({
      popup: true,
      iconpop: "visible",
    });
  };
  ChangeThePageData = (number) => {
    this.setState({
      CurrentPage: number,
    });
  };
  HandleInputChange = (event) => {
    this.setState({
      selectedValue: event.target.value,
    });
  };
  PopupClose = () => {
    this.setState({
      popup: false,
      iconpop: "hidden",
    });
  };
  render() {
    const indexOfLastPost = this.state.CurrentPage * this.state.PostsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.PostsPerPage;
    const CurrentPosts = this.state.posts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    if (this.state.login === true) {
      return (
        <div className="">
          <SideBar />
          <div className="bg-gray-200  ml-46 absolute h-full w-101 overflow-auto ">
            <button
              className=" right-16 w-32 text-xl
             h-auto bg-white rounded-lg hover:bg-gray-300 top-10 absolute"
              onClick={this.PopupDisplay}
            >
              <FontAwesomeIcon icon={faRegistered} className="w-5 h-5" />
              Register
            </button>
            <div className=" flex flex-row mt-10 space-x-36 ml-10 ">
              <p className=" text-xl w-20 relative">
                Name
                <SortIcon className="absolute left-12 w-8 h-6 top-0.5 " />
              </p>
              <p className="text-xl  w-20 relative">
                Begin
                <SortIcon className="absolute left-12 w-8 h-6 top-0.5 " />
              </p>
              <p className="text-xl  w-16 relative">
                End
                <SortIcon className="absolute left-7 w-8 h-6 top-0.5 " />
              </p>
              <select
                value={this.state.selectedValue}
                className="border-2 border-gray-300 w-24 bg-white rounded-lg outline-none"
                onChange={this.HandleInputChange}
              >
                <option value="onGoing">Ongoing</option>
                <option value="Live">Live</option>
                <option value="Finished">Finished</option>
              </select>
            </div>
            {CurrentPosts.map((item) => {
              const begindate = new Date(item.begindate).toLocaleDateString();
              const enddate = new Date(item.enddate).toLocaleDateString();
              return (
                <CompetitionList
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  begindate={begindate}
                  enddate={enddate}
                />
              );
            })}
            <Pagination
              posts={this.state.posts}
              PostsPerPage={this.state.PostsPerPage}
              paginate={(value) => {
                this.ChangeThePageData(value);
              }}
            />
            <Popup trigger={this.state.popup}>
              <AddCompetition></AddCompetition>
            </Popup>
            <span
              className="absolute top-14 h-auto bg-white border-b-gray-700 border-b-2
               left-60 rounded-lg px-2 w-8 hover:bg-gray-300"
              style={{ visibility: this.state.iconpop ,cursor: "pointer",}}
            >
              <FontAwesomeIcon
                icon={faLessThan}
                className=" fill-current text-blue-600 mt-1.5"
                onClick={this.PopupClose}
              />
            </span>
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

export default CompetitionPage;
