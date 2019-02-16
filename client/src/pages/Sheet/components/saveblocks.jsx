import React from 'react';

const style = {
    color: "wheat"
}
const secStyle = {
    color: "chocolate"
}
const SaveBlock = props => {
    return (
        <div id="oval" style={style}>
        {props.name}
       
            <div id="circle" style={secStyle}>
            <p>
            {props.val}
            </p>
            </div>
        </div>

    )
}
SaveBlock.defaultProps = {
    name: "save",
    val: "0"
}
export default SaveBlock;