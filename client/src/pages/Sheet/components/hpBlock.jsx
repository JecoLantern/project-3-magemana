import React from 'react';
import {Col, Row} from '../../../components/Grid';
import '../styles/hpBlock.css';

const HpBlock = () => (
    <Row>
        <Col size="6, sm-6, md-6, lg-6">
            <div id="squareTV4">
                <div id="rectangleRounded4"></div>
            </div>
        </Col>
        <Col size="6, sm-6, md-6, lg-6">
            <div id="squareTV5">
                <div id="rectangleRounded5"></div>
            </div>
        </Col>
        <div id="rectangleRounded6"></div>
    </Row>
)

export default HpBlock;