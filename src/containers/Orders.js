import React, {useEffect, useState} from "react";
import ElementCard from "../components/ElementCard";
import {post} from "../services/Client";
import {ORDER} from "../constants/rete";

export default function Orders({onClickOrder, productList, onClickDelete}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(productList.reduce((a, b) => a + b.cost, 0));
        console.log(total)
    }, [productList]);

    return (
        <>
            <h2>Carrello</h2>
            <div className="orders">
                {productList.length === 0 ? <div> Carrello Vuoto </div> : productList.map((prod) => <ElementCard
                    name={prod.name} cost={prod.cost} onClickDelete={() => onClickDelete(prod)}/>)}
            </div>
            <p>Totale: {total}€</p>
            {productList.length !== 0 &&
                <button className="button orderButton" onClick={() => onClickOrder(total)}>Ordina e Paga</button>}
        </>
    );
}
