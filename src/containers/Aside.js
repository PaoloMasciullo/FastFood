import React, {useState, useEffect} from "react";
import Orders from "./Orders"
import Transactions from "./Transactions"
import {userType} from "../constants/userType";

export default function Aside({productList, onClickOrder, onClickDelete}) {
    const [typeUser, setTypeUser] = useState(0);



    return (
        <aside>
            <Orders productList={productList} onClickOrder={onClickOrder} onClickDelete={onClickDelete}/>
            {false && <Transactions/>}
        </aside>
    );
}
