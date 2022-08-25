import React, { Component } from "react";
import SideBar from "../components/SideBar";
import ViewWinnerList from "../components/ViewWinnerList";
import axios from "axios";

class ViewWinners extends Component {
  state = {
    posts: [],
    match: "",
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({
      match: id,
    });
    axios.get(`https://tlserver.herokuapp.com/match/${id}`).then((response) => {
      this.setState({
        posts: response.data.users,
      });
    });
  }
  ShowData = () => {
    if (this.state.posts.length !== 0) {
      return this.state.posts.map((winner) => {
        return (
          <ViewWinnerList
            key={winner.id}
            id={winner.id}
            score={winner.result.score}
            name={winner.username}
            email={winner.email}
            image={winner.image}
          />
        );
      });
    } else {
      return (
        <div className="ml-52 mt-20">
          <p className="text-3xl">No winners yet</p>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="">
        <SideBar />
        <div className="bg-gray-200  ml-46 absolute h-full w-101 overflow-auto">
          {this.ShowData()}
        </div>
      </div>
    );
  }
}

export default ViewWinners;
