import React from 'react';
import { Row, Col } from '../../../components/Grid';
import Skills from "./Skills";
import '../styles/skillsBlock.css';

const SkillsBlock = (props) => (
    <Col size="4">
        <div id="squareTV7">
            <h2 className="skillsTxt">Skills
            </h2>
            <Row>
                <ul className="skillPosition">
                    {props.skillList.map(skill => {
                        return <Skills
                        parent={skill.parentAttr}
                        skill={skill.skillName}
                        val={skill.val}
                        />
                    })}
                </ul>
            </Row>
        </div>
    </Col>
)
SkillsBlock.defaultProps = {
    skillList: []
}


export default SkillsBlock;