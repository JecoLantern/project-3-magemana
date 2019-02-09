import React, { Component } from 'react';
import { Col, Row } from '../../components/Grid';
import QuestionBox from './components';
import CharGen from './util/CharacterClass';
import SurveyQs from './util/Survey';
import axios from 'axios';
// import Redirect from "react-redirect"

class Survey extends Component {
    state = {
        name: "",
        race: "",
        class: "",
        alignment: ""
    }

    handleBuild = event => {
        let arr = [];
        arr.push(this.state.name)
        arr.push(this.state.race)
        arr.push(this.state.class)
        arr.push(this.state.alignment)
        event.preventDefault();
        const char = new CharGen(...arr);
        char.build()
    }

    handleChange = event => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value });
        console.log(event.target.value)
    }


    render() {
        return (
            <div className="container">
                <Row add="justify-content-center">
                    <Col size="sm-12w md-8 lg-6,">
                        <form className="survey">
                            {SurveyQs.map(el => (
                                //map through the question objects
                                <QuestionBox
                                    key={el.value}
                                    question={el.question}
                                    choices={el.choices}
                                    value={el.value}
                                    name={el.value}
                                    onClick={this.handleChange}
                                    onChange={this.handleChange}
                                />
                            ))}
                            <button onClick={this.handleBuild}>Submit and build!</button>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Survey;