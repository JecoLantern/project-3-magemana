import React, { Component } from 'react';
import { Col, Row } from '../../components/Grid';
import ranNames from './util/randomNames.json';
import QuestionBox from './components';

class Survey extends Component{
    // state = {
    //     surveyQuestions: [
    //         {
    //             value: "name",
    //             question: "What is your adventurers name?",
    //             choices: [],
    //             chose:""

    //         }, {
    //             question: "What is your chosen class?",
    //             value: "class",
    //             choices: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rougue", "Sorcerer", "Warlock", "Wizard"],
    //             chose:""
    //         },
    //     ],
    //     characterBuild: {
    //         name: "",
    //         level: 1,
    //         race: "",
    //         subrace: "",
    //         classType: "",
    //         subclass: "",
    //         attributes: [
    //             {attr:"str" , val:10},
    //             {attr:"dex" , val:10}, 
    //             {attr:"con" , val:10}, 
    //             {attr:"int" , val:10}, 
    //             {attr:"wis" , val:10}, 
    //             {attr:"cha" , val:10}
    //         ],
    //         proficencies: [],
    //         startingEquipment: [],
    //     }
    // }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col size={"sm-12, md-6, lg-4"}>
                        {/* {this.surveyHandle} */}
                        hello
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Survey;