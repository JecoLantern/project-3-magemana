import React, { Component } from 'react';
import { Col, Row } from '../../components/Grid';
import QuestionBox from './components';
import CharGen from './util/CharacterClass';
import SurveyQs from './util/Survey';
import axios from 'axios';

class Survey extends Component {
    state = {
        answers: []
    }

    // componentDidMount = () => {
    //     this.surveyHandle()
    // }

    handleCharPush = character => {
        axios.get("/auth/user")
            .then(res => {
                let user_Id = res._id
                const push = {
                    ...character,
                    ...user_Id
                }
                axios.post("/api/c/charsheet", push)
                    .then(response => console.log(response))
            })
    }

    handleBuild = event => {
        event.preventDefault();
        const char = new CharGen(...this.state.answers);
        this.handleCharPush(char);
    }

    handleInput = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            ...this.state,
            [name]: value
        });
    };


    render() {
        return (
            <div className="container">
                <Row add="justify-content-center">
                    <Col size="sm-12, md-6, lg-4,">
                        <form className="survey">
                            {SurveyQs.map(el => (
                                //map through the question objects
                                <QuestionBox
                                    key={el.value}
                                    question={el.question}
                                    onClick={this.handleInput}
                                    choices={el.choices}
                                    name={el.value}
                                    buttonLabel={el.value}
                                    onChange={this.handleInput}
                                />
                            ))}
                            <button type="submit">Submit and build!</button>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Survey;








