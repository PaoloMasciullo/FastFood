import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header({onClick}){
    return(
        <head>
            <div className="topbar"/>
            <GiHamburgerMenu onClick={onClick}/>
        </head>
    )

}