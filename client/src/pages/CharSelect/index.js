import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Head from "../Select/components/header"
import Header from "./components/Header";
import API from "../Sheet/util/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";
import './style/style.css'
import SideBar from '../../components/SideBar/SideBar'
class CharSelect extends Component {
    state = {
        redirectTo: null,
        characters: []
    }

    // Get charsheet by user id
    loadChars = () => {
        // API.getCharSheet(this.props.match.params.id)
        API.getCharSheets()
            .then(res => {
                const characters = res.data
                this.setState({ characters: characters })
            })
    }
    componentDidMount() {
        this.loadChars();
    }

    deleteMyChar = id => {
        API.deleteCharSheet(id)
            .then(res => this.loadChars())
            .catch(err => console.log(err));
    };

    handleNewAdventurer = event => {
        this.setState({ redirectTo: "/survey" })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (

                <Container>
                    <Header
                        onClick={this.handleNewAdventurer}
                    />
                    <Row>
<div id="App">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
                <div id="page-wrap">
                        {this.state.characters.length ? (
                            <List>
                                {this.state.characters.map(char => (
                                <ListItem 
                                    key={char._id}
                                    _id={char._id}>
                                    <Link to={"/charsheet/" + char._id} className="link">
                                        <strong>
                                            {char.name}
                                            {" Level " +char.level}
                                            {"  " + char.race}
                                            {"  " + char.class}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteMyChar(char._id)} />
                                </ListItem>
                                ))}
                            </List>
                        ) : (<h4 className="noChar">No Characters Found</h4>)}
     </div>
    </div>
                    </Row>
    
                </Container>
                
            )
        }
    }
}
export default CharSelect;