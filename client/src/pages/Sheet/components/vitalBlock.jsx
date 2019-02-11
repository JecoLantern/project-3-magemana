import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/vitalBlock.css';

const VitalBlock = ({children}) => (
    <Col size="3, sm-3, md-3">
        {children}
    </Col>
)

export default VitalBlock;