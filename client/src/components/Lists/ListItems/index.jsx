import React from 'react';

export function Equip ({equipment}){
    return equipment.map(name => <li className={`Equip`}>{name}</li>  )
    
}


