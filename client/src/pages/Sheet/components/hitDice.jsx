import React from 'react';
import '../styles/hitDice.css';

const HitDice = (props) => (
    <div id="squareTV6">
    <p className="hitdiceTxt">Hit Dice:</p>
        <div id="rectangleRounded7"><h6 className="hitdiceMaxTxt">Max:</h6><h6 className="hitdiceVal">{props.hitDice}</h6></div>
        <div id="rectangleRounded8"><h6 className="hitdiceCurrentTxt">Current: </h6><input className="hitdiceInput"/></div>
    </div>
)

export default HitDice;