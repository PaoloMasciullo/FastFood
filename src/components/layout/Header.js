import React from "react";
import {GiHamburgerMenu, GiShoppingCart} from 'react-icons/gi';
import {BiTransferAlt} from "react-icons/bi";
import {userType} from "../../constants/userType";

let role = localStorage.getItem("role");

export default function Header({onClick}){
    return(
        <header>
            <div className="topbar"/>
            {
                role === userType.CLIENTE ?
                <GiShoppingCart onClick={onClick}/>
                    :
                <BiTransferAlt onClick={onClick}/>
            }

        </header>
    )

}