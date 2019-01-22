import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>

                        <Route />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default hot(module)(App)