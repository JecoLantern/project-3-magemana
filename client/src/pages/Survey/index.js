import React, {Component} from 'react-dom';
import {Col, Row} from '../../components/Grid'
import './_surveyStyle.css';
import ranNames from '.'

class Survey extends Component{ 
    state ={
        surveyQuestions:[
            {
                question:"What is your adventurers name?",
                Answers:[]
            },{
                question:"What is your chosen class?",
                Answers:["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rougue", "Sorcerer", "Warlock", "Wizard"]
            },
        ],
        characterBuild:{
            name:"",
            level:1,
            race:"",
            subrace:"",
            class:"",
            subclass:"",
            attributes:[10,10,10,10,10,10],
            proficencies:[],
            startingEquipment:[],
        }
    }

    randomNameGen = ()=>{
        //Math.Random() through an array of fantasy ass fantasy names if the nameInput === null;
    }

    surveyHandle=()=>{
        //generate a 
    };

    handleProgressiveRenderClass=()=>{
        //based on the selected Class it will render a list of subclass'
        //switch case, the class then make an api call to get all of the appropraite subclass 
    }   
    
    handleProgressiveRenderRace=()=>{
        //based on the selected race it will render a list of sub races' 
       //switch case, the class then make an api call to get all of the appropraite subrace
    }

    handleProgressiveRenderSkillProf=()=>{

    }

    handleProgressiveRenderStartEquip=()=>{

    }

    

    render(){
        return(
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