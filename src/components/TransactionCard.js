import React, {useState} from "react";
import {deleteEl} from "../services/Client";
import {PRODUCT} from "../constants/rete";

export default function TransactionCard({user, date, total}) {
    return (
                <div className="card">
                    <p>Utente: {user}</p>
                    <p>Data: {date}</p>
                    <p>Totale: {total}€</p>
                </div>
    );
}