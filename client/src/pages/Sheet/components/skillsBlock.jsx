import React from 'react';
import { Col } from '../../../components/Grid';
import Skills from "./Skills";
import '../styles/skillsBlock.css';

var style={
    
}

const SkillsBlock = (props) => (
    <Col size="4">
        <div id="squareTV7">
            <h2
                style={style}
            >   Skills
            </h2>
            <hr />
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