import React from 'react';

export default function Skill ({skill, val, parent}){
    return(
        <li className={`${skill}`}>
        <div>
            <h6 className="skillsFs">{skill} - <span>({parent})</span>
                <small> mod:{val}</small>
                <label className="checkbox">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
            </h6>
        </div>
        </li>
    )
}