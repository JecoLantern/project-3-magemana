import React from 'react';

export default function Skill ({skill, val, parent}){
    return(
        <li className={`${skill}`}>{skill} - <span>({parent})</span> <small> mod:{val}</small><input type="checkbox"/></li>
    )
}