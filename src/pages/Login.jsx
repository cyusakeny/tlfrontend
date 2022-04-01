import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogSideBar from "../components/LogSideBar";
import { ReactComponent as MailIcon } from "/home/keny/tlfrontend/src/images/email.svg";
import { ReactComponent as PassIcon } from "/home/keny/tlfrontend/src/images/password.svg";
import { ReactComponent as FacebookIcon } from "/home/keny/tlfrontend/src/images/facebook.svg";
import { ReactComponent as InstaIcon } from "/home/keny/tlfrontend/src/images/instagram.svg";
import { ReactComponent as TwitterIcon } from "/home/keny/tlfrontend/src/images/twitter.svg";
class Login extends Component {
  constructor(props) {
    super(props);
    this.SetPassword = this.SetPassword.bind(this);
  }
  state = {
    password: "",
    email: "",
  };
  SetPassword = (e) => {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  };
  SetEmail = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };
  HandleSubmit = (e) => {
    e.preventDefault();
    const token = 1234;
    localStorage.setItem("token", token);
  };
  render() {
    return (
      <div className="">
        <LogSideBar />
        <div className="bg-white  ml-80 absolute h-full w-9.10 border-2 overflow-hidden">
          <div className="flex flex-row ml-97.45 space-x-2 -mt-1">
            <p className="text-gray-color-50 font-prompt">
              Don't Have An Account?
            </p>
            <Link to="/createaccount" className="font-bold font-prompt">
              Create Account
            </Link>
          </div>
          <div className="flex flex-row mt-10 ml-16 space-x-4">
            <p className="text-3xl">Log into</p>
            <p className="text-3xl">TYPING</p>
            <p className="text-2xl font-postcolombo mt-0.5 text-yellow-color">
              LORD
            </p>
          </div>
          <form
            onSubmit={this.HandleSubmit}
            className="flex flex-col mt-6 ml-12"
          >
            <label className=" text-xl text-gray-color-100">EMAIL</label>
            <input
              type="email"
              name="email"
              id="EmailId"
              placeholder="EMAIL"
              className="border 
           border-black 
           ml-10 pl-4 h-7 w-72 rounded-r-sm  outline-none"
              required
              onChange={this.SetEmail}
            />
            <MailIcon className="w-10 h-7 border border-black -mt-7" />
            <label className=" text-xl text-gray-color-100 mt-6">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="PasswordId"
              placeholder="PASSWORD"
              className="border border-black ml-10 
           pl-4 h-7 w-72 rounded-r-sm 
            outline-none"
              required
              onChange={this.SetPassword}
            />
            <PassIcon className="w-10 h-7 border border-black -mt-7" />
            <Link to="" className="font-bold ml-48 mt-8 mb-4">
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="bg-black text-white w-24 h-12 rounded-md"
            >
              Sign In
            </button>
          </form>

          <div className="flex flex-row ml-40 -mt-10">
            <a href="http://" className="">
              <FacebookIcon className="fill-current text-black w-10 h-10 mr-12" />
            </a>
            <a href="http://" className="">
              <InstaIcon className="fill-current text-black w-10 h-10 mr-12" />
            </a>
            <a href="http://" className="">
              <TwitterIcon className="fill-current text-black w-10 h-10 mr-12" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
