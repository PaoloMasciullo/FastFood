import React from "react";
import {BsXLg} from "react-icons/bs";

export default function Orders({order}) {
    return (
        <div className="orders">
            <ul>
                {
                    order && order.map(prod => <li>{prod.name}: {prod.cost} <BsXLg /></li>)
                }
            </ul>

        </div>
    );
}
