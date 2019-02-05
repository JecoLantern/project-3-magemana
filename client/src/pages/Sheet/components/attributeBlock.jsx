import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/attributeBlock.css';

const AttributeBlock = () => (
    <Col size="2, sm-2, md-2, lg-2, xl-2">
        <div>
            <div id="rectangle"></div>
            <div id="squareTV">
                <div id="rectangleRounded"></div>
            </div>
            <div id="oval">
                <div id="circle"></div>
            </div>
        </div>
    </Col>
)

export default AttributeBlock;