import React from 'react';

const ListItem = props => (

    <li className="character">
        <button className="characterBtn" value={props._id} onClick={props.onClick}> 
            <strong>{props.name}  </strong>
            <small>Level: {props.lvl}</small>
            <a onClick={(e) => {
                                    props.deleteTask(props);
                                }}
                            >
                                <i className="fa fa-close"></i>
                            </a>
        </button>
    </li>

)

export default ListItem;



 