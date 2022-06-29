import React, {useState} from "react";
import {BsXLg} from "react-icons/bs";

export default function ElementCard({user, date, total, name, cost, onClickDelete}) {
    return (
                <div className="elementCard card">
                    {name && <BsXLg className="BsXLg" onClick={onClickDelete}/>}
                    {user && <p><strong>Utente:</strong> {user}</p>}
                    {date && <p><strong>Data:</strong> {date}</p>}
                    {total && <p><strong>Totale:</strong> {total}€</p>}
                    {name && <p><strong>Nome Prodotto:</strong> {name}</p>}
                    {cost && <p><strong>Prezzo:</strong> {cost}</p>}
                </div>
    );
}