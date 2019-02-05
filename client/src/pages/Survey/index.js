import React, { Component } from 'react';
import { Col, Row } from '../../components/Grid';
import QuestionBox from './components';
import ranNames from './util/randomNames.json';
import axios from 'axios';

class Survey extends Component {
    state = {
        surveyQuestions: [
            {
                value: "name",
                question: "What is your adventurers name?",
                choices: []
            },
            {
                question: "What is your chosen race?",
                value: "race",
                choices: ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"]
            },
            {
                question: "What is your chosen class?",
                value: "class",
                choices: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rougue", "Sorcerer", "Warlock", "Wizard"]
            },
            {
                question: "What is your chosen alignment?",
                value: "alignment",
                choices: ["Lawful Good", "Nuetral Good", "Chaotic Good", "Lawful Nuetral", "True Nuetral", "Chaotic Nuetral", "Lawful Evil", "Nuetral Evil", "Chaotic Evil"]
            }
        ],
        characterBuild: {
            name: "",
            level: 1,
            race: "",
            subrace: "",
            classType: "",
            subclass: "",
            armorClass: 0,
            health: 0,
            hitDice: '',
            speed: 30,
            initiative: 0,
            passivePerception: 10,
            attributes: [
                { attr: "STR", val: 10 },
                { attr: "DEX", val: 10 },
                { attr: "CON", val: 10 },
                { attr: "INT", val: 10 },
                { attr: "WIS", val: 10 },
                { attr: "CHA", val: 10 }
            ],
            savingThrows: [
                { name: "STR", val: 0, isProficient: false },
                { name: "DEX", val: 0, isProficient: false },
                { name: "CON", val: 0, isProficient: false },
                { name: "INT", val: 0, isProficient: false },
                { name: "WIS", val: 0, isProficient: false },
                { name: "CHA", val: 0, isProficient: false },
            ],
            skillProfiencies: [],
            proficencies: [],
            startingEquipment: [],
        }
    }

    randomNameGen = (race) => {
        //Math.Random() through an array of fantasy ass fantasy names if the nameInput === null;
        let ran = Math.floor((Math.random() * 20) + 1);

        switch (race) {
            case "elf" || "half-elf":
                let elname = ranNames.elfNames[ran]
                this.setState({ characterBuild: elname })
                break;
            case "human":
                let humName = ranNames.humanNames[ran]
                this.setState({ characterBuild: humName })
                break;
            case "dwarf":
                let dname = ranNames.dwarfNames[ran]
                this.setState({ characterBuild: dname })
                break;
            case "halfling":
                let haname = ranNames.halflingNames[ran]
                this.setState({ characterBuild: haname })
                break;
            case "dragonborn":
                let drname = ranNames.dragonbornNames[ran]
                this.setState({ characterBuild: drname })
                break;
            case "half-orc":
                let honame = ranNames.orcNames[ran]
                this.setState({ characterBuild: honame })
                break;
            case "tiefling":
                let tiname = ranNames.tieflingNames[ran]
                this.setState({ characterBuild: tiname })
                break;
            default: let name = ranNames.humanNames[ran]
                this.setState({ characterBuild: name })
        }
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    inputHandler = (value = null) => {
        if (value === "class") this.handleClassPush();
        if (value === "race") this.handleRacePush();
        if (value === "alignment") this.handleAlignmentPush();
        else this.handleInputChange();
    }

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

    handleClassPush = (choice) => {
        //based on the selected Class it will set the character state to the optimized selections for this class, including attribute array, selected skills, proficiencies, and equipment
        axios.get(`/api/e/classes/${choice}`)
            .then(res => {

                const {
                    proficiencies,
                    proficiency_choices,
                    saving_throws,
                    hit_die,
                } = res

                let profChoice = proficiency_choices[0].from.map(el => {
                    return el.name
                });
                let profChoiceAmt = proficiency_choices[0].choose;

                let saveThrows = saving_throws.map(el => {
                    return el.name
                })


                this.setState({
                    surveyQuestions: [
                        {
                            value: "proficiencies",
                            question: `choose ${profChoiceAmt}`,
                            choices: [...profChoice]
                        }
                    ],
                    characterBuild: {
                        classType: choice,
                        hitDice: hit_die,
                        proficiencies:proficiencies,
                        savingThrows: [
                            { name: "STR", val: 0, isProficient: false },
                            { name: "DEX", val: 0, isProficient: false },
                            { name: "CON", val: 0, isProficient: false },
                            { name: "INT", val: 0, isProficient: false },
                            { name: "WIS", val: 0, isProficient: false },
                            { name: "CHA", val: 0, isProficient: false },
                        ],
                    }
                })

            })

    };

    handleRacePush = () => {
        //based on the selected race it will set the state of the character to the optimized selections for each racial choice

    };

    handleFinalSubmitPush = () => {
        //here we will make the finall submit to the database for the character then we will load the charactersheet with the unique id of the selected character
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








