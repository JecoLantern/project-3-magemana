import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing'
import Sheet from './pages/Sheet'
import Survey from './pages/Survey'
import Select from './pages/Select'
const fof = () => <h1>nothing found</h1>
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/charsheet" component={Sheet} />
                        <Route path="/survey" component={Survey} />
                        <Route path="/select" component={Select} />
                        <Route component={fof} />

                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;