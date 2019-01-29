import React, { Component } from 'react-dom';
import { Col, Row } from '../../components/Grid';
import questionBox from './components';
import './_surveyStyle.css';
import ranNames from './util/randomNames.json';

class Survey extends Component {
    state = {
        surveyQuestions: [
            {
                key: 1,
                value: "name",
                question: "What is your adventurers name?",
                choices: []
            }, {
                key: 2,
                question: "What is your chosen class?",
                value: "class",
                choices: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rougue", "Sorcerer", "Warlock", "Wizard"]
            },
        ],
        characterBuild: {
            name: "",
            level: 1,
            race: "",
            subrace: "",
            class: "",
            subclass: "",
            attributes: [
                {attr:"str" , val:10},
                {attr:"dex" , val:10}, 
                {attr:"con" , val:10}, 
                {attr:"int" , val:10}, 
                {attr:"wis" , val:10}, 
                {attr:"cha" , val:10}
            ],
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

        }
    }

    surveyHandle = () => {
        //generate a 
        this.state.surveyQuestions.map(el =>{
            //map through the question objects
            return(
                <questionBox 
                key={el.key}
                question={el.question}
                choicePush={()=> this.inputHandler()}
                choices={el.choices}
                value={el.value}
                onChange={this.inputHandler()}
                 />
            )

        })
    };

    handleProgressiveRenderClass = () => {
        //based on the selected Class it will render a list of subclass'
        //switch case, the class then make an api call to get all of the appropraite subclass 
        // switch(class){
        //     case "barbarian":
        //     break
        // }
    }

    // handleProgressiveRenderRace = () => {
    //     //based on the selected race it will render a list of sub races' 
    //     //switch case, the class then make an api call to get all of the appropraite subraceswitch (race) {
    //     case "elf":
            
    //         break;
    //     case "half-elf":
            
    //         break;
    //     case "human":
            
    //         break;
    //     case "dwarf":
            
    //         break;
    //     case "halfling":
            
    //         break;
    //     case "dragonborn":
            
    //         break;
    //     case "half-orc":
            
    //         break;
    //     case "tiefling":
            
    //         break;

    // }
    // }

    handleProgressiveRenderSkillProf = () => {

    }

    handleProgressiveRenderStartEquip = () => {

    }



    render() {
        return (
            <div className="container">
                <Row>
                    <Col size={["sm-12", "md-6", "lg-4"]}>
                        {this.surveyHandle()}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Survey;