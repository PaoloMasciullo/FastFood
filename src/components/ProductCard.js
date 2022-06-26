import React, {useState} from "react";
import {deleteEl} from "../services/Client";
import {PRODUCT} from "../constants/rete";

export default function ProductCard({id, name, description, type, cost, update}) {
    const [onDelete, setOnDelete] = useState(false);

    function handleDelete() {
        deleteEl([PRODUCT], {elem: id}).then(() => setOnDelete(true));
    }

    return (
        <>
            {
                !onDelete &&
                <div className="card">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{type}</p>
                    <p>{cost}€</p>
                    <div className="buttons">
                        <button className="button" onClick={update}>Modifica</button>
                        <button className="button" onClick={() => handleDelete()}>Elimina</button>
                    </div>
                </div>
            }
        </>
    )
        ;
}