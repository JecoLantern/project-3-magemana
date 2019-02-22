import React from "react";

const List = props => {
    return (
        <ul className="equipInputList">
            {props.children}
            <li className="equipInput">
                <form onSubmit={props.onSubmit}>
                    <input className="equipInput" value={props.value} onChange={props.handleChange} />
                    <button className="buttonAdd" type="submit" value="Submit">Add</button>
                </form>
            </li>
        </ul>
    )
}

export default List;