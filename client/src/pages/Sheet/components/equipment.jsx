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
                <div id="rectangle4"></div>
            </Col>
            <Col size="4">
                <div id="rectangle5"></div>
            </Col>
            <Col size="4">
                <div id="rectangle6"></div>
            </Col>
        </Row>
        <Row>
            <Col size="4">
                <div id="rectangle7"></div>
            </Col>
            <Col size="4">
                <div id="rectangle8"></div>
            </Col>
            <Col size="4">
                <div id="rectangle9"></div>
            </Col>
        </Row>
        </div>
        <div id="rectangle3"></div>
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
    equipment: []
}


export default Equipment;