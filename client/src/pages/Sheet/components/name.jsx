import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/namePlate.css';

const Name = ({children}) => (
    <Col size="4, sm-4">
        <div className="name">{children}</div>
    </Col>
);

export default Name;