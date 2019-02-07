import React from 'react';
import { Col } from '../../../components/Grid';
import style from '../style/index.css';
const QuestionBox = props => {
    return (
        <Col size="m-4">
            <div className="questionWrap">
                {props.question}
            </div>
            <div className="ansWrap" id={props.key}>
                {//if choices is empty provide text field, change these to radio buttons, and pull the active one, put these into a form to make submission easier. you fucking idiot
                    props.choices.length >= 1 ?
                        props.choices.map(ans =>
                            <div className="radioWrap">
                                <input
                                    key={ans}
                                    className="radBut"
                                    name={props.name}
                                    value={ans}
                                    type="radio"
                                />
                                <label htmlFor={ans}>
                                    {ans}
                                </label>
                            </div>
                        ) :
                        <input
                            id={`${props.name}1`}
                            className="textBox"
                            name={props.name}
                            onChange={props.onChange}
                        />
                }
            </div>
        </Col>
    )
}

export default QuestionBox;