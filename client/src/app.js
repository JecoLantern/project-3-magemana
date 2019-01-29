import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing'
import Sheet from './pages/Sheet'
// import  Survey  from './pages/Survey'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/charsheet" component={Sheet} />
                        {/* <Route exact path="/survey" component={Survey} /> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default hot(module)(App)