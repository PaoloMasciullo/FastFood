import React, {useState, useEffect} from "react";
import Orders from "./Orders"
import Transactions from "./Transactions"
import {userType} from "../constants/userType";

export default function Aside({productList}) {
    const [typeUser, setTypeUser] = useState(0);



    return (
        <aside>
            <Orders productList={productList}/>
            {false && <Transactions/>}
        </aside>
    );
}
