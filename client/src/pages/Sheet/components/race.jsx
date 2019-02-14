import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/namePlate.css';

const Race = ({children}) => (
    <Col size="4, sm-4">
        <div className="race">{children}</div>
    </Col>
);

export default Race;