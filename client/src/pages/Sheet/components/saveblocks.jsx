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
        <h5 className="savePosition">{props.name}</h5>
       
            <div id="circle" style={secStyle}>
            <p className="savePostVal">
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