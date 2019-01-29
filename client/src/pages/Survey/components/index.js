import React from 'react';
import { Col } from '../../../components/Grid'

questionBox = props => {
    return (
        <Col size="m-4">
            <div>
                {props.question}
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.buttonLabel}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {//if choices is empty provide text field
                    props.choices.length > 0 ?
                        props.choices.map(ans =>
                    <a class="dropdown-item" onClick={props.choicePush}>{ans}</a>
                    ) : <input className={props.value} onChange={props.onChange}
                    />}
                </div>
            </div>
        </Col>
    )
}