import React from "react";
import {get} from "../services/Client";
import {ORDER} from "../constants/rete";
import {useEffect, useState} from "react";
import TransactionCard from "../components/TransactionCard";

export default function Transactions({show, onClick}) {
    const [transactions, setTransactions] = useState(null);

    function getTransactions() {
        get([ORDER]).then(res => setTransactions(res));
    }

    useEffect(() => {
        getTransactions()
    }, []);

    return(
        <div className="transactions">
            <h2>Transazioni</h2>
            <ul>
                {
                    transactions && transactions.map(transaction => <TransactionCard user={transaction.user} date={transaction.date} total={transaction.total}/>)
                }
            </ul>

        </div>
    );
}