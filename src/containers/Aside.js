import React, {useState} from "react";
import Orders from "./Orders"
import Transactions from "./Transactions"
import {userType} from "../constants/userType";

export default function Aside({onClick}) {
    const [typeUser, setTypeUser] = useState(0);

    return (
        <aside>
            <Transactions/>
        </aside>
    );
}
