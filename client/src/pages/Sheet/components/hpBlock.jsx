import React from 'react';
import { Row, Col } from '../../../components/Grid';
import '../styles/hpBlock.css';

const HpBlock = (props) => (
    <div className="hpCentral">
        <div id="squareTV4"><p className="healthTxt">HEALTH</p>
            <div id="rectangleRounded4"><h6 className="hpMaxTxt">HP Max: {props.health}</h6></div>
            <div id="rectangleRounded5"><h6 className="hpCurrentTxt">HP current:<input className="hpInput"/></h6></div>
        </div>
        <div id="rectangleRounded6">
            <Row>
                <Col size="4">
                    <h6 className="successTxt">Success</h6>
                </Col>
                <Col size="4"></Col>
                <Col size="4">
                    <h6 className="failureTxt">Failure</h6>
                </Col>
            </Row>
            <Row>
                <Col size="4">
                    <label className="checkbox checkboxDS checkboxPosition">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkbox checkboxDS">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkbox checkboxDS">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </Col>
                <Col size="4">
                    <h6 className="deathsaveTxt">Death Saves</h6>
                </Col>
                <Col size="4">
                    <label className="checkbox checkboxDS checkboxPosition2">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkbox checkboxDS">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkbox checkboxDS">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </Col>
            </Row>
        </div>
    </div>
)

export default HpBlock;