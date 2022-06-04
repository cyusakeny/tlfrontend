import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import HomePage from "./Home";
import Login from "./Login";
import MyProfile from "./Myprofile";
import TypingPage from "./TypingPage";
import Competition from "./Competition";
import ViewMatches from "./ViewMatches";
import ViewWinners from "./ViewWinners";
import ViewRequirements from "./ViewRequirements";
import Courses from "./Courses";
import LivePage from "./Live";
class MainComponent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/typing" component={TypingPage}></Route>
        <Route exact path="/myprofile" component={MyProfile}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/createaccount" component={CreateAccount}></Route>
        <Route exact path="/competitions" component={Competition}></Route>
        <Route exact path="/viewMatches/:id" component={ViewMatches}></Route>
        <Route exact path="/viewWinners" component={ViewWinners}></Route>
        <Route
          exact
          path="/viewRequirements"
          component={ViewRequirements}
        ></Route>
        <Route exact path="/courses" component={Courses}></Route>
        <Route exact path="/live" component={LivePage}></Route>
      </Switch>
    );
  }
}

export default MainComponent;
