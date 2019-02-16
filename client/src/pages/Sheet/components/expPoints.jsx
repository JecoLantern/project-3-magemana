import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/namePlate.css';

const ExpPoints = ({children}) => (
    <Col size="4">
        <div className="expPoints">{children}</div>
    </Col>
);

export default ExpPoints;