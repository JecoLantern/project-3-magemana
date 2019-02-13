import React from 'react';
import { Col } from '../../../components/Grid';
import List from '../../../components/Lists';
import  Skills  from "./Skills";
import '../styles/skillsBlock.css';

const SkillsBlock = ({skillArr}) => (
    <Col size="4, sm-4, md-4">
        <div id="squareTV7">
            <ul>
                {skillArr.map(skill=>{
                    return <Skills
                        skill = {skill.skillName}
                        val = {skill.val}
                    />
                })}
            </ul>
        </div>
    </Col>
)

export default SkillsBlock;