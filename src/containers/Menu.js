import React, {useEffect, useState} from "react";
import {get, post} from "../services/Client";
import {ORDER, PRODUCT} from "../constants/rete";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/modals/ProductModal";
import {initialValueProduct} from "../constants/Product";
import Aside from "./Aside";
import {userType} from "../constants/userType";

export default function Menu({showSidebar, setShowSidebar, openSidebar}) {
    const [menu, setMenu] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [product, setProduct] = useState(initialValueProduct);
    const [productList, setProductList] = useState([]);

    let role = localStorage.getItem("role");

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
        let count = [...productList.filter((prd => prd._id===prod._id))].length+1;
        openSidebar(true);
        setProductList((productList) => ([...productList, {_id:prod._id, name:prod.name, cost:prod.cost, count:count}]));
    }

    function removeToOrder(prd){
        console.log(...productList.filter((prod => prod._id!==prd._id && prod.count === prd.count)))
        setProductList((productList) => [...productList.filter((prod => !(prod._id===prd._id && prod.count === prd.count)))]);
    }

    function newOrder(total){
        post([ORDER], {body: {products: productList, total: total, user: localStorage.getItem('uId')}}).then(() => onOrderDone())
    }

    function onOrderDone(){
        setShowSidebar(false);
        setProductList([]);
    }

    useEffect(() => console.log("productList: ", productList), [productList]);

    return (
        <>
            {
                showSidebar &&
                <Aside onClick={openSidebar} productList={productList} onClickOrder={(total) => newOrder(total)} onClickDelete={(prd) => removeToOrder(prd)}/>
            }
            {
                showModal &&
                <ProductModal isUpdate={isUpdate} product={product} title={titleModal} onclose={() => hideModal()}/>
            }
            <div className="menu">
                <h1>Menu</h1>
                {role === userType.AMMINISTRATORE && <button className="button" onClick={() => handleIsCreate()}>Nuovo Prodotto</button>}
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