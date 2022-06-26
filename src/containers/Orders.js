import React, {useEffect} from "react";
import ElementCard from "../components/ElementCard";

export default function Orders({productList}) {
    return (
        <>
            <h2>Carrello</h2>
            <div className="orders">
                {productList && productList.map((prod) => <ElementCard name={prod.name} cost={prod.cost}/>)}
            </div>
        </>
    );
}
