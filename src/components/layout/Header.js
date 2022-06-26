import React from "react";
import {GiHamburgerMenu, GiShoppingCart} from 'react-icons/gi';
import {BiTransferAlt} from "react-icons/bi";

export default function Header({onClick}){
    return(
        <header>
            <div className="topbar"/>
            {false && <GiShoppingCart onClick={onClick}/>}
            <BiTransferAlt onClick={onClick}/>
        </header>
    )

}