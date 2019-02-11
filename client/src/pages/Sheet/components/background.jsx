import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/namePlate.css';

const Background = ({children}) => (
    <Col size="4, sm-4, md-4">
        <div className="background">{children}</div>
    </Col>
);

export default Background;