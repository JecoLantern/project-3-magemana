import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ListItem from "./components/Character";
import Header from "./components/Header";


class CharSelect extends Component {
    state = {
        redirectTo: null,
    }

    // componentDidMount = () =>{
    //     return this.HandleList
    // }

    handleNewAdventurer = event =>{
        this.setState({redirectTo: "/survey"})
    }

    HandleList = () => {
        //here you will pull formaxios to get the useres list of charactersa
        axios.get("/api/c/charsheet")
            .then(res => {
                if(res.length > 0){
                    console.log(res)
                    res.map(char => {
                        return (<ListItem
                            _id={char._id}
                            onClick={this.handelSelect}
                            name={char.name}
                            lvl={char.level}
                        />)
                    })
                } else {
                    return <h2>No Adventurers found</h2>
                }
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <Header
                        onClick = {this.handleNewAdventurer}
                    />
                    <ul>
                        {this.HandleList}
                    </ul>
                </div>
            )
        }
    }
}
export default CharSelect;