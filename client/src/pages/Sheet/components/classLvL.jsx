import React from 'react';
import {Col} from '../../../components/Grid';
import '../styles/namePlate.css';

const ClassLvL = ({children}) => (
    <Col size="4, sm-4, md-4, lg-4, xl-4">
        <div className="classLvl">{children}</div>
    </Col>
);

export default ClassLvL;