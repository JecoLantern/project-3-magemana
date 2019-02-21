import React from 'react';
import { Col, Row } from '../../../components/Grid';
import List from '../../../components/Lists';
import { Equip } from "../../../components/Lists/ListItems";
import '../styles/equipment.css';

const Equipment = (props) => (
    <Col size="4">
        <div id="squareTV8"><p className="equipTxt">EQUIPMENT</p>
    <Row>
        <div id="rectangle2"><h2 className="attacksTxt">Attacks</h2>
        <Row>
            <Col size="4">
                <div>
                    <div id="rectangle4"><p className="weaponNameTxt">{props.weapons[0].name}</p></div>
                </div>
            </Col>
            <Col size="4">
                <div>
                    <div id="rectangle5"><p className="weaponAtkDmgTxt">{props.weapons[0].atk}</p></div>
                </div>
            </Col>
            <Col size="4">
                <div>
                    <div id="rectangle6"><p className="weaponAtkDmgTxt">{props.weapons[0].dmg}</p></div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col size="4">
                <div id="rectangle7"><p className="weaponNameTxt">{props.weapons[1].name}</p></div>
            </Col>
            <Col size="4">
                <div id="rectangle8"><p className="weaponAtkDmgTxt">{props.weapons[1].atk}</p></div>
            </Col>
            <Col size="4">
                <div id="rectangle9"><p className="weaponAtkDmgTxt">{props.weapons[1].dmg}</p></div>
            </Col>
        </Row>
        </div>
        <div id="rectangle3"><p className="moneyTxt">Money:{props.money}</p></div>
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