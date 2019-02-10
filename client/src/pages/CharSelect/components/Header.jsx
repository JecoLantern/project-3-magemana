import React from 'react';

export default props => (
    <header className="header">
        <h1 className="title">Choose Your Adevnturer</h1>
        <button className="newChar" onClick={props.onClick}>
            New Adevnturer
        </button>

    </header>
)