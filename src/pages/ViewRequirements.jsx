import axios from "axios";
import React, { Component } from "react";
import SideBar from "../components/SideBar";
class ViewRequirements extends Component {
  state = {
    prices: [],
    requirements: [],
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const token = localStorage.getItem("token");
    axios
      .get(`https://tlserver.herokuapp.com/competition/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.setState({
          prices: response.data.prize,
          requirements: response.data.requirements,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <SideBar />
        <div className="bg-white  ml-46 absolute h-full w-101 overflow-hidden ">
          <div className="ml-28 flex flex-col space-y-2 mt-8">
            <h1 className="font-bold text-3xl">About</h1>
            <p className="text-gray-color-230">
              This competition is for helping people to master typing
            </p>
            <h1 className="font-bold text-3xl">Requirements</h1>
            {this.state.requirements.map((requirement) => {
              return <p className="text-gray-color-230">{requirement}</p>;
            })}
            <h1 className="font-bold text-3xl">Prices</h1>
            {this.state.prices.map((price) => {
              return <p className="text-gray-color-230">{price}</p>;
            })}
            <h1 className="font-bold text-3xl">Motivation</h1>
            <p className="text-gray-color-230">
              Learn to code for the better future
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewRequirements;
