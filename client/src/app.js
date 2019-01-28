import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default hot(module)(App)