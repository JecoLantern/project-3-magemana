import React from "react";

const List = props =>{
    return (
        <ul>
            {props.children}
            {/* <li><button onClick={props.onClick}> Add {props.addLabel}</button></li> */}
        </ul>
    )
}

export default List;