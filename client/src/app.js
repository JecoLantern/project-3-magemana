import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing'
import Sheet from './pages/Sheet'
import Survey from './pages/Survey'
import Select from './pages/CharSelect'

const fof = () => (<header><h1>404 error - nothing found</h1></header>) //<<<404 page

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/charsheet/:id" render={(props) => <Sheet {...props} isAuthed={true}/>} />
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