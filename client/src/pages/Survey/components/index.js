import React from 'react';
import { Col } from '../../../components/Grid'

QuestionBox = props => {
    return (
        <Col size="m-4">
            <div>
                {props.question}
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.buttonLabel}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {//if choices is empty provide text field
                    props.choices.length > 0 ?
                        props.choices.map(ans =>
                    <a className="dropdown-item" onClick={props.choicePush}>{ans}</a>
                    ) : <input className={props.value} onChange={props.onChange}
                    />}
                </div>
            </div>
        </Col>
    )
}

export default QuestionBox;