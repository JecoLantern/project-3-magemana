import React from "react";

const List = props =>{
    return (
        <ul>
            {props.children}
            <li><button onClick={props.onClick}>{props.buttonLabel}</button></li>
        </ul>
    )
}

export default List;