import React, { Component } from 'react';
import { Col, Row } from '../../components/Grid';
import ranNames from './util/randomNames.json';
import QuestionBox from './components';

class Survey extends Component{
    state = {
        surveyQuestions: [
            {
                value: "name",
                question: "What is your adventurers name?",
                choices: [],
                chose:""

            },
            {
                question: "What is your chosen class?",
                value: "class",
                choices: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rougue", "Sorcerer", "Warlock", "Wizard"],
                chose:""
            },
            {
                question: "What is your chosen class?",
                value: "class",
                choices: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rougue", "Sorcerer", "Warlock", "Wizard"],
                chose:""
            },
        ],
    //     characterBuild: {
    //         name: "",
    //         level: 1,
    //         race: "",
    //         subrace: "",
    //         classType: "",
    //         subclass: "",
    //         attributes: [
    //             { name: 'Charisma', value: 10 },
    //             { name: 'Constitution', value: 10 },
    //             { name: 'Dexterity', value: 10 },
    //             { name: 'Intelligence', value: 10 },
    //             { name: 'Strength', value: 10 },
    //             { name: 'Wisdom', value: 10 }
    //         ][
    //         alignment = '',
    //         armor = [],
    //         armorClass = 0,
    //         attacks = [],
    //         background = '',
    //         currentHP = 0,
    //         deathSaves = {
    //           failures: 0,
    //           successes: 0
    //         },
    //         hitDice = {
    //           numberOfDice: 1,
    //           numberOfSides: 4
    //         },
    //         id = null,
    //         initative = 0,
    //         inspiration = 0,
    //         proficiency = 0,
    //         savingThrows = [
    //           { name: 'Charisma', proficient: false, value: 0 },
    //           { name: 'Constitution', proficient: false, value: 0 },
    //           { name: 'Dexterity', proficient: false, value: 0 },
    //           { name: 'Intelligence', proficient: false, value: 0 },
    //           { name: 'Strength', proficient: false, value: 0 },
    //           { name: 'Wisdom', proficient: false, value: 0 }
    //         ],
    //         speed = 0,
    //         skills = [
    //           { name: 'Acrobatics', proficient: false, ability: 'dexterity', value: 0 },
    //           {
    //             name: 'Animal Handling',
    //             proficient: false,
    //             ability: 'Wisdom',
    //             value: 0
    //           },
    //           { name: 'Arcana', proficient: false, ability: 'intelligence', value: 0 },
    //           { name: 'Athletics', proficient: false, ability: 'strength', value: 0 },
    //           { name: 'Deception', proficient: false, ability: 'charisma', value: 0 },
    //           { name: 'History', proficient: false, ability: 'intelligence', value: 0 },
    //           { name: 'Insight', proficient: false, ability: 'wisdom', value: 0 },
    //           {
    //             name: 'Intimidation',
    //             proficient: false,
    //             ability: 'charisma',
    //             value: 0
    //           },
    //           {
    //             name: 'Investigation',
    //             proficient: false,
    //             ability: 'intelligence',
    //             value: 0
    //           },
    //           { name: 'Medicine', proficient: false, ability: 'wisdom', value: 0 },
    //           { name: 'Nature', proficient: false, ability: 'intelligence', value: 0 },
    //           { name: 'Perception', proficient: false, ability: 'wisdom', value: 0 },
    //           { name: 'Performance', proficient: false, ability: 'charisma', value: 0 },
    //           { name: 'Persuasion', proficient: false, ability: 'charisma', value: 0 },
    //           {
    //             name: 'Religion',
    //             proficient: false,
    //             ability: 'intelligence',
    //             value: 0
    //           },
    //           {
    //             name: 'Sleight Of Hand',
    //             proficient: false,
    //             ability: 'dexterity',
    //             value: 0
    //           },
    //           { name: 'Stealth', proficient: false, ability: 'dexterity', value: 0 },
    //           { name: 'Survival', proficient: false, ability: 'wisdom', value: 0 }
    //         ],
    //         temporaryHP = 0,
    //         xp = 0,
    //         {
    //         startingEquipment: [],
    //         }]
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
}}

export default Survey;








