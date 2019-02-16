import React from "react";

const List = props => {
    return (
        <ul>
            {props.children}
            <li>
                <form onSubmit={props.onSubmit}>
                    <input value={props.value} onChange={props.handleChange} />
                    <button type="submit" value="Submit">Add</button>
                </form>
            </li>
        </ul>
    )
}

export default List;