import React from 'react';
import { Col } from '../../../components/Grid';
import Skills from "./Skills";
import '../styles/skillsBlock.css';



const SkillsBlock = props => (
    <Col size="4, sm-4, md-4">
        <div id="squareTV7">
            <ul>
                {props.skillList.map(skill => {
                    return <Skills
                        parent={skill.parentAttr}
                        skill={skill.skillName}
                        val={skill.val}
                    />
                })}
            </ul>
        </div>
    </Col>
)
SkillsBlock.defaultProps = {
    skillList: []
}


export default SkillsBlock;