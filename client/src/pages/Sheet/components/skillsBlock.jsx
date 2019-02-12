import React from 'react';
import { Col } from '../../../components/Grid';
import List from '../../../components/Lists';
import { Skill } from "../../../components/Lists/ListItems";
import '../styles/skillsBlock.css';

const SkillsBlock = () => (
    <Col size="4, sm-4, md-4, lg-4">
        <div id="squareTV7">
            <List>
                <Skill></Skill>
            </List>
        </div>
    </Col>
)

export default SkillsBlock;