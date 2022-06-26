import React from "react";
import {get} from "../services/Client";
import {ORDER} from "../constants/rete";
import {useEffect, useState} from "react";
import ElementCard from "../components/ElementCard";

export default function Transactions({show, onClick}) {
    const [transactions, setTransactions] = useState(null);

    function getTransactions() {
        get([ORDER]).then(res => setTransactions(res));
    }

    useEffect(() => {
        getTransactions()
    }, []);

    return(
        <>
            <h2>Transazioni</h2>
            <div className="transactions">
                {
                    transactions && transactions.map(transaction => <ElementCard user={transaction.user} date={transaction.date} total={transaction.total}/>)
                }
            </div>
        </>
    );
}