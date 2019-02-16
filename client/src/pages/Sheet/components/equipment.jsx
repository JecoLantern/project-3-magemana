import React from 'react';
import { Col, Row } from '../../../components/Grid';
import List from '../../../components/Lists';
import { Equip } from "../../../components/Lists/ListItems";
import '../styles/equipment.css';

const Equipment = (props) => (
    <Col size="4">
            <div id="squareTV8">
        <Row>
        <div id="rectangle2">
        <Row>
            <Col size="4">
                <p>Name</p>
                <div id="rectangle4">{props.weapons[0].name}</div>
            </Col>
            <Col size="4">
                <p>Atk</p>
                <div id="rectangle5">{props.weapons[0].atk}</div>
            </Col>
            <Col size="4">
                <p>Dmg</p>
                <div id="rectangle6">{props.weapons[0].dmg}</div>
            </Col>
        </Row>
        {/* <Row>
            <Col size="4">
                <div id="rectangle7">{props.weapons[1].name}</div>
            </Col>
            <Col size="4">
                <div id="rectangle8">{props.weapons[1].atk}</div>
            </Col>
            <Col size="4">
                <div id="rectangle9">{props.weapons[1].dmg}</div>
            </Col>
        </Row> */}
        </div>
        <div id="rectangle3">Money gp:{props.money}</div>
    </Row>
    <Row>
        <div className="space">
            <List
                onSubmit = {props.onSubmit}
                handleChange ={props.handleChange}
                value={props.value}
            >
                <Equip
                    equipment={props.equipment}
                />
            </List>
        </div>
    </Row>
    </div>
</Col>
)
Equipment.defaultProps = {
    equipment: [],
    weapons:[
        {name:"shortbow", atk:"+0", dmg:"1d6"},
        {name:"dagger", atk:"+0", dmg:"1d4"},
    ],
    money: "15 gp"
}


export default Equipment;