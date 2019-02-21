import React, { Component } from 'react';
import '../Landing/_loginSty.css';
import FadeTransition from "../transitions/fadeTransitions.jsx";
import LoginBox from "./LoginForm";
import Logout from "../../components/Logout/Logout"
import RegisterBox from "./RegisterBox";
import axios from 'axios';

class Land extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      user: null,
      redirectTo: null
    };
  }

  
  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
          redirectTo: '/Select'
        })
      }
    })
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={"controller " + (this.state.isLoginOpen
              ? "selected-controller"
              : "")}
            onClick={this
              .showLoginBox
              .bind(this)}>
            Login
          </div>
          <div
            className={"controller " + (this.state.isRegisterOpen
              ? "selected-controller"
              : "")}
            onClick={this
              .showRegisterBox
              .bind(this)}>
            Register
          </div>
       
        </div>

        <FadeTransition isOpen={this.state.isLoginOpen} duration={100}>
          <div className="box-container">
            <LoginBox />
          </div>
        </FadeTransition>

        <FadeTransition isOpen={this.state.isRegisterOpen} duration={100}>
          <div className="box-container">
            <RegisterBox />
          </div>
        </FadeTransition>

      </div>
    );

  }

}


export default Land;
