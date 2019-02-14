import React from 'react';
import {Col, Row} from '../../../components/Grid';
import '../styles/tertiaryAttribute.css';

const TertiaryAttribute = ({children}) => (
    <Col size="3">
        <Row>
            {children}
        </Row>
    </Col>
)

export default TertiaryAttribute;