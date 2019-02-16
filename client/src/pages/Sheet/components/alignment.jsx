import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/namePlate.css';

const Alignment = ({children}) => (
    <Col size="4">
        <div className="alignment">{children}</div>
    </Col>
);

export default Alignment;