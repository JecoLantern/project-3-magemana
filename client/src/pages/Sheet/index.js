import React, { Component } from "react";
import {Col, Row} from "../../components/Grid";
import "../Sheet/_charSheetSty.css";

class CharacterSheet extends Component{

    render() {
        return (
            <div className="container">
                <Row>
                    <Col size="1, sm-1, md-1, l-1, xl-1">
                        <div id="diamond1"><h6>Place Logo IMG here</h6></div>
                    </Col>
                    <Col size="1, sm-1, md-1, l-1, xl-1">
                        <div id="square1"><h6>Avatar dummy IMG</h6></div>
                    </Col>
                    <Col size="10, sm-10, md-10, l-10, xl-10">
                        <Row>
                            <Col size="4, sm-4, md-4, l-4, xl-4">
                                <div><h6>Namae wa</h6></div>
                            </Col>
                            <Col size="4, sm-4, md-4, l-4, xl-4">
                                <div><h6>Background</h6></div>
                            </Col>
                            <Col size="4, sm-4, md-4, l-4, xl-4">
                                <div><h6>Experience Points</h6></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="4, sm-4, md-4, l-4, xl-4">
                                <div><h6>Race</h6></div>
                            </Col>
                            <Col size="4, sm-4, md-4, l-4, xl-4">
                                <div><h6>Alignment</h6></div>
                            </Col>
                            <Col size="4, sm-4, md-4, l-4, xl-4">
                                <div><h6>Class & Level</h6></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

};

export default CharacterSheet;