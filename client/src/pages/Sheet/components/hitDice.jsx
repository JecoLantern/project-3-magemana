import React from 'react';
// import {Row} from '../../../components/Grid';
import '../styles/hitDice.css';

const HitDice = (props) => (
    <div id="squareTV6">
    <h5>Hit Dice:</h5>
        <div id="rectangleRounded7">Max:{props.hitDice}</div>
        <div id="rectangleRounded8">Current: <input/></div>
    </div>
)

export default HitDice;