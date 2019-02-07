import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "../Sheet/_charSheetSty.css";

//Importing CharSheet Components
import Logo from "./components/logo";
import Avatar from "./components/avatar";
import NamePlate from "./components/namePlate";
import AttributeBlock from "./components/attributeBlock";
import VitalBlock from "./components/vitalBlock";
import TertiaryAttribute from "./components/tertiaryAttribute";
import CharacterFeatures from "./components/charFeatures";
import HpBlock from "./components/hpBlock";
import HitDice from "./components/hitDice";
import SkillsBlock from "./components/skillsBlock";
import Equipment from "./components/equipment";

class CharacterSheet extends Component{

    render() {
        return (
            <Container>
                <Row>
                    <Logo></Logo>
                    <Avatar></Avatar>
                    <NamePlate></NamePlate>
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