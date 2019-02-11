import React from 'react';
import {Col, Row} from '../../../components/Grid';
import '../styles/namePlate.css';

const NamePlate = ({children}) => (
    <Col size="8, sm-8, md-8">
        <Row>
            {children}
        </Row>
    </Col>
)

export default NamePlate;