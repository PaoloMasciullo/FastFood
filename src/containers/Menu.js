import React, {useEffect, useState} from "react";
import {get} from "../services/Client";
import {PRODUCT} from "../constants/rete";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/modals/ProductModal";
import {initialValueProduct} from "../constants/Product";
import Aside from "./Aside";

export default function Menu({showSidebar, openSidebar}) {
    const [menu, setMenu] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [product, setProduct] = useState(initialValueProduct);
    const [productList, setProductList] = useState([]);

    function getMenu() {
        get([PRODUCT]).then(res => setMenu(res));
    }

    useEffect(() => {
        getMenu()
    }, [showModal]);

    function hideModal() {
        setShowModal(false);
        setIsUpdate(false);
        setProduct(initialValueProduct);
    }

    function handleIsCreate() {
        setShowModal(true);
        setIsUpdate(false);
        setTitleModal("Nuovo Prodotto");
    }

    function handleIsUpdate(prod) {
        setShowModal(true);
        setIsUpdate(true);
        setTitleModal("Modifica Prodotto");
        setProduct(prod);
    }

    function addToOrder(prod) {
        openSidebar(true);
        setProductList((productList) => ([...productList, prod]));
    }

    /*function removeToOrder(){

    }*/

    useEffect(() => console.log("productList: ", productList), [productList]);

    return (
        <>
            {
                showSidebar &&
                <Aside onClick={openSidebar} productList={productList}/>
            }
            {
                showModal &&
                <ProductModal isUpdate={isUpdate} product={product} title={titleModal} onclose={() => hideModal()}/>
            }
            <div className="menu">
                <h1>Menu</h1>
                <button className="button" onClick={() => handleIsCreate()}>Nuovo Prodotto</button>
                <div className='cards'>
                    {
                        menu && menu.map(prod => <ProductCard update={() => handleIsUpdate(prod)} id={prod._id}
                                                              name={prod.name} description={prod.description}
                                                              type={prod.type}
                                                              cost={prod.cost} addToOrder={() => addToOrder(prod)}/>)
                    }
                </div>
            </div>

        </>
    );
}