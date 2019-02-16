import React from 'react';
// import { Col } from '../../../components/Grid';
import '../styles/hpBlock.css';

const HpBlock = (props) => (
    <div className="hpCentral">
        <div id="squareTV4"><span>HEALTH</span>
            <div id="rectangleRounded4">HP Max:{props.health}</div>
            <div id="rectangleRounded5">HP current:<input/></div>
        </div>
        <div id="rectangleRounded6">
            Success
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
            death saves
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
            Failure
        </div>
    </div>
)

export default HpBlock;