import React from 'react';

export default props => (

    <li className="character" value={props._id} onClick={props.onClick}>
        <div>{props.name}<small>{props.lvl}</small></div>
    </li>

)
