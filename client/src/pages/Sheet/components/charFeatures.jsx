import React from 'react';
import { Col } from '../../../components/Grid';
import '../styles/charFeatures.css';

var style={
    background: "#5b3624",
    color: "wheat",
    width: "17rem",
    height: "2rem",
    borderRadius: "0.625rem",
    position: "relative",
    textAlign: "center"
}

const CharacterFeatures = props => (
    <Col size="4">
        <div id="squareTV9">
            <div>
                <h2 style={style}>Features</h2>
                {props.features.length ? props.features.map(feat => (
                    <div className="charFeatSpace">
                        <ul>
                            <li><h4>{feat}</h4></li>
                        </ul>
                        {/* <h4>{feat}</h4> */}
                    </div>
                )) : <p> No Featrues</p>}
            </div>
        </div>
    </Col>
)
CharacterFeatures.defaultProps = {
    features: []
}
export default CharacterFeatures;