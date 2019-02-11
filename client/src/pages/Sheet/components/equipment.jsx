import React from 'react';
import { Col, Row } from '../../../components/Grid';
import List from '../../../components/Lists';
import { Equip } from "../../../components/Lists/ListItems";
import '../styles/equipment.css';

const Equipment = () => (
    <Col size="4, sm-4, md-4, lg-4">
            <div id="squareTV8">
        <Row>
        <div id="rectangle2">
        <Row>
            <Col size="4, sm4, md-4, lg-4">
                <div id="rectangle4"></div>
            </Col>
            <Col size="4, sm4, md-4, lg-4">
                <div id="rectangle5"></div>
            </Col>
            <Col size="4, sm4, md-4, lg-4">
                <div id="rectangle6"></div>
            </Col>
        </Row>
        <Row>
            <Col size="4, sm4, md-4, lg-4">
                <div id="rectangle7"></div>
            </Col>
            <Col size="4, sm4, md-4, lg-4">
                <div id="rectangle8"></div>
            </Col>
            <Col size="4, sm4, md-4, lg-4">
                <div id="rectangle9"></div>
            </Col>
        </Row>
        </div>
        <div id="rectangle3"></div>
    </Row>
    <Row>
        <div className="space">
            <List>
                <Equip></Equip>
            </List>
        </div>
    </Row>
    </div>
</Col>
)

export default Equipment;