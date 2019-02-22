import React from 'react';
import { Col } from '../../../components/Grid';
import '../styles/charFeatures.css';

const CharacterFeatures = props => (
    <Col size="4">
        <div id="squareTV9">
            <div>
                <h2 className="charFeaturesTxt">Features</h2>
                {props.features.length ? props.features.map(feat => (
                    <div className="charFeatSpace">
                        <ul>
                            <li className="charFeatList"><h4 className="charFeats">{feat}</h4></li>
                        </ul>
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