import React from 'react';
// import {Row} from '../../../components/Grid';
import '../styles/hitDice.css';

const HitDice = (props) => (
    <div id="squareTV6">
    <p className="hitdiceTxt">Hit Dice:</p>
        <div id="rectangleRounded7">Max:{props.hitDice}</div>
        <div id="rectangleRounded8">Current: <input className="hitdiceInput"/></div>
    </div>
)

export default HitDice;