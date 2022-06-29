import React, {useState} from "react";
import {deleteEl} from "../services/Client";
import {PRODUCT} from "../constants/rete";
import {userType} from "../constants/userType";

export default function ProductCard({id, name, description, type, cost, update, addToOrder}) {
    const [onDelete, setOnDelete] = useState(false);

    function handleDelete() {
        deleteEl([PRODUCT], {elem: id}).then(() => setOnDelete(true));
    }

    let role = localStorage.getItem("role");

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
                        {
                            role === userType.CLIENTE ?
                                <button className="button" onClick={addToOrder}>Aggiungi</button>
                                :
                                <>
                                    <button className="button" onClick={update}>Modifica</button>
                                    <button className="button" onClick={() => handleDelete()}>Elimina</button>
                                </>

                        }
                    </div>
                </div>
            }
        </>
    )
        ;
}