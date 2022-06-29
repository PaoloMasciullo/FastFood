import React from "react";
import {GiHamburgerMenu, GiShoppingCart} from 'react-icons/gi';
import {BiTransferAlt} from "react-icons/bi";
import {userType} from "../../constants/userType";


export default function Header({onClick, logout}){
    let role = localStorage.getItem("role");
    console.log(role)
    return(
        <header>
            <div className="topbar"/>
            <div className="logout" onClick={() => logout()}>Logout</div>
            {
                role === userType.CLIENTE ?
                <GiShoppingCart onClick={onClick}/>
                    :
                <BiTransferAlt onClick={onClick}/>
            }
        </header>
    )

}