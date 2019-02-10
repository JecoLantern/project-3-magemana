import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/attributeBlock.css';

const AttributeBlock = ({children}) => (
    <Col size="2, sm-2, md-2, lg-2">
        {children}
    </Col>
)

export default AttributeBlock;