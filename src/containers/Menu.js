import React, {useEffect, useState} from "react";
import {get} from "../services/Client";
import {PRODUCT} from "../constants/rete";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/modals/ProductModal";

export default function Menu() {
    const [menu, setMenu] = useState(null);
    const [showModal, setShowModal] = useState(false);

    function getMenu(){
        get([PRODUCT]).then(res => setMenu(res));
    }

    useEffect(() => {
        getMenu()
    }, [])

    function handleOnClick(){
        setShowModal(!showModal);
    }

    console.log(menu);
    return (
        <>
            {
                showModal&&
                <ProductModal onclick={() => handleOnClick()}/>
            }
            <div className="menu">
                <h1>Menu</h1>
                <button onClick={() => handleOnClick()}>Nuovo Prodotto</button>
                <div className='cards'>
                    {
                        menu && menu.map(prod => <ProductCard id={prod._id} name={prod.name} description={prod.description} cost={prod.cost}/>)
                    }
                </div>
            </div>

        </>
    );
}