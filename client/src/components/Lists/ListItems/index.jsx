import React from 'react';

export function Equip ({name, quant, type}){
    return(
        <li className={`${type}Equip`}>{name}<small>{quant}</small></li>
    )
}


export function Skill ({skill, prof, mod, isProf}){
    if(isProf) mod = mod + prof;
    return(
        <li className={`$skill`}>{skill}<small> mod: +{mod}</small><input type="radio"/></li>
    )
}