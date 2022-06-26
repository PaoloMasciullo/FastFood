import React, {useState} from "react";
import {BsXLg} from "react-icons/bs";

export default function ElementCard({user, date, total, name, cost}) {
    return (
                <div className="elementCard card">
                    {name && <BsXLg />}
                    {user && <p>Utente: {user}</p>}
                    {date && <p>Data: {date}</p>}
                    {total && <p>Totale: {total}€</p>}
                    {name && <p>Nome Prodotto: {name}</p>}
                    {cost && <p>Prezzo: {cost}</p>}
                </div>
    );
}