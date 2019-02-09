import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ListItem from "./components/Character";
import Header from "./components/Header";
import './style/style.css'
import axios from 'axios';

class CharSelect extends Component {
    state = {
        redirectTo: null,
        characters: []
    }


    componentDidMount() {
        axios.get("/api/c/charsheet")
            .then(res => {
                const characters = res.data
                this.setState({ characters: characters })
            })
    }

    handleSelect = event =>{
       const _id = event.target.value
       //^^ the id of the character youre going to view 
    }

    handleNewAdventurer = event => {
        this.setState({ redirectTo: "/survey" })
    }



    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <Header
                        onClick={this.handleNewAdventurer}
                    />
                    <ul>
                        {this.state.characters.length ? this.state.characters.map(char => {
                            return <ListItem
                                name={char.name}
                                key={char._id}
                                _id={char._id}
                                onClick={this.handleSelect}
                                lvl={char.level}
                            />
                        }) : <h4>No Characters Found</h4>}
                    </ul>
                </div>
            )
        }
    }
}
export default CharSelect;