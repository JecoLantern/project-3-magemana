import React from 'react';
import { Col } from '../../../components/Grid';
import '../styles/attributeBlock.css';

const AttributeBlock = (props) => (
    <Col size="2">
        {props.children}
    </Col>
)

export default AttributeBlock;