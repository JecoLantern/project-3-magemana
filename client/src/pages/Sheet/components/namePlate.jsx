import React from 'react';
import { Col, Row } from '../../../components/Grid';
import '../styles/namePlate.css';

import Name from "./name";
import Background from "./background";
import ExpPoints from "./expPoints";
import Race from "./race";
import Alignment from "./alignment";
import ClassLVL from "./classLvL";

const NamePlate = ({ name, race, alignment, className, level }) => (
    <Col size="8">
        <Row>
            <Name>
                <h2 className="fs768 fs850 fs750 fs480">{name}</h2>
            </Name>
            <Background>
                <h2 className="fs768 fs850 fs750 fs480">Background</h2>
            </Background>
            <ExpPoints>
                <h2 className="fs768 fs850 fs750 fs480">ExpPoints</h2>
            </ExpPoints>
            <Race>
                <h2 className="fs768 fs850 fs750 fs480v2">{race}</h2>
            </Race>
            <Alignment>
                <h2 className="fs768 fs850 fs750 fs480v2">{alignment}</h2>
            </Alignment>
            <ClassLVL>
                <h2 className="fs768 fs850 fs750 fs480">{className} | <small>Level:</small>{level}</h2>
            </ClassLVL>
        </Row>
    </Col>
)

export default NamePlate;