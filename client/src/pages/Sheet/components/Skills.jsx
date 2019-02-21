import React from 'react';

export default function Skill ({skill, val, parent}){
    return(
        <li className={`${skill}`}>
        <div>
            <h6 className="skillsFs"><strong>{skill} - <span>({parent})</span></strong>
                <small> mod:{val}</small>
                <label className="checkbox">
                    <input type="checkbox"/>
                    <span className="checkmark checkmarkPosition2"></span>
                </label>
            </h6>
        </div>
        </li>
    )
}