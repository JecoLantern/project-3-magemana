import React, { Component } from 'react';
import axios from "axios";
class RegisterBox extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        errors: [],
        pwdState: null
    };

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({
            errors: [
                ...prevState.errors, {
                    elm,
                    msg
                }
            ]
        }));
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for (let err of prevState.errors) {
                if (elm !== err.elm) {
                    newArr.push(err);
                }
            }
            return { errors: newArr };
        });
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
        this.clearValidationErr("username");
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
        this.clearValidationErr("email");
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
        this.clearValidationErr("password");

        this.setState({ pwdState: "weak" });
        if (e.target.value.length > 8) {
            this.setState({ pwdState: "medium" });
        } else if (e.target.value.length > 12) {
            this.setState({ pwdState: "strong" });
        }

    }

    openPopup(e) {
        console.log("Hello world!");
    }

    handleSubmit=(event)=> {
        event.preventDefault()
        // TODO - validate!
        axios
            .post('/auth/signup', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('youre good')
                    this.setState({
                        redirectTo: '/login'
                    })
                } else {
                    console.log('duplicate')
                }
            })
    }

    render() {

        let usernameErr = null,
            passwordErr = null,
            emailErr = null;

        for (let err of this.state.errors) {
            if (err.elm === "username") {
                usernameErr = err.msg;
            }
            if (err.elm === "password") {
                passwordErr = err.msg;
            }
            if (err.elm === "email") {
                emailErr = err.msg;
            }
        }

        let pwdWeak = false,
            pwdMedium = false,
            pwdStrong = false;

        if (this.state.pwdState === "weak") {
            pwdWeak = true;
        } else if (this.state.pwdState === "medium") {
            pwdWeak = true;
            pwdMedium = true;
        } else if (this.state.pwdState === "strong") {
            pwdWeak = true;
            pwdMedium = true;
            pwdStrong = true;
        }

        return (
            <div className="inner-container">
                <div className="header">
                    Register
          </div>
                <div className="box">
                    <form>

                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                className="login-input"
                                placeholder="Username"
                                onChange={this
                                    .onUsernameChange
                                    .bind(this)} />
                            <small className="danger-error">{usernameErr
                                ? usernameErr
                                : ""}</small>
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                className="login-input"
                                placeholder="Email"
                                onChange={this
                                    .onEmailChange
                                    .bind(this)} />
                            <small className="danger-error">{emailErr
                                ? emailErr
                                : ""}</small>
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                className="login-input"
                                placeholder="Password"
                                onChange={this
                                    .onPasswordChange
                                    .bind(this)} />
                            <small className="danger-error">{passwordErr
                                ? passwordErr
                                : ""}</small>

                            {this.state.password && <div className="password-state">
                                <div
                                    className={"pwd pwd-weak " + (pwdWeak
                                        ? "show"
                                        : "")}></div>
                                <div
                                    className={"pwd pwd-medium " + (pwdMedium
                                        ? "show"
                                        : "")}></div>
                                <div
                                    className={"pwd pwd-strong " + (pwdStrong
                                        ? "show"
                                        : "")}></div>
                            </div>}

                        </div>

                        <button
                            type="button"
                            className="login-btn"
                            onHover={this
                                .openPopup
                                .bind(this)}
                            onClick={this
                                .handleSubmit}>Register</button>
                    </form>

                </div>
            </div>

        );

    }

}

export default RegisterBox;