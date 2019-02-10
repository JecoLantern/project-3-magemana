import React from 'react';

const Logout = props =>{
    return (
        <button onClick={props.onClick} className={props.className}>
            Logout
        </button>
    )
}

export default Logout;