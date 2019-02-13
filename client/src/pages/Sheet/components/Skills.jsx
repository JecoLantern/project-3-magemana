import React from 'react';

export default function Skill ({skill, val}){
    return(
        <li className={`${skill}`}>{skill}<small> mod:{val}</small><input type="radio"/></li>
    )
}