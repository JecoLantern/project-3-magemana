import React, { Component } from 'react';
import { Col, Row } from '../../components/Grid';
import QuestionBox from './components';


class Survey extends Component {
    state = {
        
    }

    componentDidMount = () =>{
        this.surveyHandle()
    }
    

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    surveyHandle = () => {
        return (
            this.state.surveyQuestions.map(el => {
                //map through the question objects
                return (
                    <QuestionBox
                        key={el.value}
                        question={el.question}
                        choicePush={() => this.inputHandler(el.value)}
                        choices={el.choices}
                        value={el.value}
                        buttonLabel={el.value}
                        onChange={this.handleInputChange}
                    />
                )
            })
        )
    };

   
    render() {
        return (
            <div className="container">
                <Row>
                    <Col size={"sm-12, md-6, lg-4"}>
                        <div>
                            {this.surveyHandle}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Survey;