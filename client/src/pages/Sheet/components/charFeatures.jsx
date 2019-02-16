import React from 'react';
import { Col } from '../../../components/Grid';
import '../styles/charFeatures.css';

const CharacterFeatures = props => (
    <Col size="4">
        <div id="squareTV9">
            <div>
                <h2>Features</h2>
                <hr/>
                {props.features.length ? props.features.map(feat => (
                    <div>
                        <h4>{feat}</h4>
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