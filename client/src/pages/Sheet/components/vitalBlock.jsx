import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/vitalBlock.css';

const VitalBlock = ({children}) => (
    <Col size="3">
        {children}
    </Col>
)

export default VitalBlock;