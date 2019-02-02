import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';

class LoginBox extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {
    username: '',
    password: '',
    redirectTo: null,
  };

  _login(username, password) {
    axios
      .post('/auth/login', {
        username,
        password
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user,
            redirectTo: "/select"
          })
        }
      })
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault()
    console.log('handleSubmit')
    this._login(this.state.username, this.state.password)
    this.setState({
      redirectTo: '/select'
    })
  }

  render() {
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
    return (
      <div className="inner-container">
        <div className="header">
          Login
          </div>
        <div className="box">
          <form>

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleInputChange}
                value={this.state.username}
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleInputChange}
                value={this.state.password}
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
              />
            </div>

            <button
              type="button"
              className="login-btn"
              onClick={this.handleSubmit}>Login</button>
          </form>

        </div>
      </div>
    );
  }
  }
}

export default LoginBox;