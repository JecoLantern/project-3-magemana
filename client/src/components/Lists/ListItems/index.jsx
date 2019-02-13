import React from 'react';

export function Equip ({name, quant, type}){
    return(
        <li className={`${type}Equip`}>{name}<small>{quant}</small></li>
    )
}


