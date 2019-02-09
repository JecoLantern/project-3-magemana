import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "../Sheet/_charSheetSty.css";
import API from "./util/API.js";
// import Wrapper from "../../components/Wrapper";

//Importing CharSheet Components
import Logo from "./components/logo";
import Avatar from "./components/avatar";
//Importing NamePlate Components
import NamePlate from "./components/namePlate";
import Name from "./components/name";
import Background from "./components/background";
import ExpPoints from "./components/expPoints";
import Race from "./components/race";
import Alignment from "./components/alignment";
import ClassLVL from "./components/classLvL";

import AttributeBlock from "./components/attributeBlock";
import VitalBlock from "./components/vitalBlock";
import TertiaryAttribute from "./components/tertiaryAttribute";
import CharacterFeatures from "./components/charFeatures";
import HpBlock from "./components/hpBlock";
import HitDice from "./components/hitDice";
import SkillsBlock from "./components/skillsBlock";
import Equipment from "./components/equipment";



class CharacterSheet extends Component{
    constructor(props){
        super(props)
        this.state = {
            CharModel: []
        };
    }

    componentDidMount() {
        // API.getCharSheet(this.props.match.params.id)
        API.getCharSheet()
            .then(res => {
                console.log(res.data[0].race)
                this.setState({ CharModel: res.data[0]})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Logo></Logo>
                    <Avatar></Avatar>
                    <NamePlate>
                        <Name>
                            <h2>{this.state.CharModel.name}</h2>
                        </Name>
                        <Background>
                            <h2>Background</h2>
                        </Background>
                        <ExpPoints>
                            <h2>ExpPoints</h2>
                        </ExpPoints>
                        <Race>
                            <h2>{this.state.CharModel.race}</h2>
                        </Race>
                        <Alignment>
                            {/* <h2>{this.state.CharModel.alignment}</h2> */}
                            <h2>Alignment</h2>
                        </Alignment>
                        <ClassLVL>
                            {/* <h2>{this.state.CharModel.class} | {this.state.CharModel.level}</h2> */}
                            <h2>{this.state.CharModel.class} & Level</h2>
                        </ClassLVL>
                    </NamePlate>
                </Row>
                <Row>
                    <Col size="6, sm-6, md-6, lg-6, xl-6">
                        <Row>
                            <AttributeBlock></AttributeBlock>
                            <AttributeBlock></AttributeBlock>
                            <AttributeBlock></AttributeBlock>
                            <AttributeBlock></AttributeBlock>
                            <AttributeBlock></AttributeBlock>
                            <AttributeBlock></AttributeBlock>
                        </Row>
                    </Col>
                    <Col size="6, sm-6, md-6, lg-6, xl-6">
                    <Row>
                        <VitalBlock></VitalBlock>
                        <VitalBlock></VitalBlock>
                        <VitalBlock></VitalBlock>
                        <TertiaryAttribute></TertiaryAttribute>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="9, sm-9, md-9, lg-9, xl-9">
                    <Row>
                        <SkillsBlock></SkillsBlock>
                        <Equipment></Equipment>
                        <CharacterFeatures></CharacterFeatures>
                    </Row>
                    </Col>
                    <Col size="3, sm-3, md-3, lg-3, xl-3">
                        <HpBlock></HpBlock>
                        <HitDice></HitDice>
                    </Col>
                </Row>
            </Container>
        )
    }

};

export default CharacterSheet;