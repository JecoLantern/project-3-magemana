import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Wrapper>
                <Router>
                    <Switch>

                        <Route />
                    </Switch>
                </Router>
                </Wrapper>
            </div>
        )
    }
}

export default hot(module)(App)