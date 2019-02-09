import React from 'react';
import {Col, Row} from '../../../components/Grid';
import '../styles/tertiaryAttribute.css';

const TertiaryAttribute = ({children}) => (
    <Col size="3, sm-3, md-3, lg-3, xl-3">
        <Row>
            {children}
        </Row>
    </Col>
)

export default TertiaryAttribute;