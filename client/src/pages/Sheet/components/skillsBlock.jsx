import React from 'react';
import { Row, Col } from '../../../components/Grid';
import Skills from "./Skills";
import '../styles/skillsBlock.css';

var style={
    background: "#5b3624",
    color: "wheat",
    width: "17rem",
    height: "2rem",
    borderRadius: "0.625rem",
    position: "relative",
    textAlign: "center"
}

const SkillsBlock = (props) => (
    <Col size="4">
        <div id="squareTV7">
            <h2
                style={style}
                >Skills
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