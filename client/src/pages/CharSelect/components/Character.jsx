import React from 'react';

const ListItem = children => (
    <li className="character">
        <button>
            {children}
        </button>
    </li>

    // <li className="character">
    //     <button className="characterBtn" value={props._id} onClick={props.onClick}> 
    //         <strong>{props.name}</strong>
    //         <small>Level: {props.lvl}</small>
    //     </button>
    // </li>

)

export default ListItem;