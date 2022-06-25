/*
import React from "react";
import { BsXLg } from "react-icons/bs";
import {FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";
import getItems from "../../services/SideBarManager";

export default function Sidebar({show, onClick}){
    const items = getItems();
    return(
        <>
            {
                show &&
                <div className="container shadow">
                    <div className="sideBar">
                        <BsXLg onClick={onClick}/>
                        <ul>
                            {
                                items && items.map(item => <li>item.name item.icon</li>)
                            }
                        </ul>
                        <div className="social">
                            <a href="#"><FaInstagram size={"1.5em"} /></a>
                        </div>

                    </div>
                </div>


            }
        </>
    );
}*/
