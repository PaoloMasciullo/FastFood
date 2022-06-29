import React from "react";
import Orders from "./Orders"
import Transactions from "./Transactions"
import {userType} from "../constants/userType";

export default function Aside({productList, onClickOrder, onClickDelete}) {
    let role = localStorage.getItem("role");

    return (
        <aside>

            {role === userType.CLIENTE ?
                <Orders productList={productList} onClickOrder={onClickOrder} onClickDelete={onClickDelete}/>
                :
                <Transactions />
            }
        </aside>
    );
}
