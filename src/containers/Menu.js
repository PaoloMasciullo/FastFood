import React, {useEffect, useState} from "react";
import {get} from "../services/Client";
import {PRODUCT} from "../constants/rete";
import ProductCard from "../components/ProductCard";

export default function Menu() {
    const [menu, setMenu] = useState(null);

    function getMenu(){
        get([PRODUCT]).then(res => setMenu(res));
    }

    useEffect(() => {
        getMenu()
    }, [])

    console.log(menu);
    return (
        <>
            <div className="menu">
                <h1>Menu</h1>
                <div className='cards'>
                    {
                        menu && menu.map(prod => <ProductCard name={prod.name} description={prod.description} cost={prod.cost}/>)
                    }
                </div>
            </div>

        </>
    );
}