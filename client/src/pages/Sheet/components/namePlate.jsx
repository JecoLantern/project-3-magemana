import React from 'react';
import {Col, Row} from '../../../components/Grid';
import '../styles/namePlate.css';

const NamePlate = () => (
    <Col size="8, sm-8, md-8, lg-8, xl-8">
        <Row className="rowA1">
            <Col size="4, sm-4, md-4, lg-4, xl-4">
                <div className="name"><h2>Namae wa</h2></div>
            </Col>
            <Col size="4, sm-4, md-4, lg-4, xl-4">
                <div className="background"><h2>Background</h2></div>
            </Col>
            <Col size="4, sm-4, md-4, lg-4, xl-4">
                <div className="expPoints"><h2>Experience Points</h2></div>
            </Col>
        </Row>
        <Row className="rowA2">
            <Col size="4, sm-4, md-4, lg-4, xl-4">
                <div className="race"><h2>Race</h2></div>
            </Col>
            <Col size="4, sm-4, md-4, lg-4, xl-4">
                <div className="alignment"><h2>Alignment</h2></div>
            </Col>
            <Col size="4, sm-4, md-4, lg-4, xl-4">
                <div className="classLvl"><h2>Class & Level</h2></div>
            </Col>
        </Row>
    </Col>
)

export default NamePlate;