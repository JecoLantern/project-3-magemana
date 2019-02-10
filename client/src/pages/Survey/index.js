import React, { Component } from 'react';
import { Col, Row } from '../../components/Grid';
import QuestionBox from './components';
import CharGen from './util/CharacterClass';
import SurveyQs from './util/Survey';
// import axios from 'axios';
// import { resolve } from 'dns';
import { Redirect } from "react-router";

class Survey extends Component {
    state = {
        name: "",
        race: "",
        class: "",
        alignment: "",
        redirectTo: null
    }



    handleBuild = event => {
        return new Promise((resolve, reject) => {
            let arr = [];
            arr.push(this.state.name)
            arr.push(this.state.race)
            arr.push(this.state.class)
            arr.push(this.state.alignment)
            event.preventDefault();
            const char = new CharGen(...arr);
            char.build()
            resolve("/select")  // this return char.build // 2
            reject("ERROR: Character build failed")
        }).then(data => this.setState({ redirectTo: data })).catch(err => console.log(err))
    }

    handleChange = event => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value });
        console.log(event.target.value)
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
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
}

export default Survey;

