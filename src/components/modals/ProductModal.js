import React, {useEffect, useState} from "react";
import {BsXLg} from "react-icons/bs";
import {post, put} from "../../services/Client";
import {PRODUCT} from "../../constants/rete";

export default function ProductModal({isUpdate, onclose, product, title}) {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(product)
    }, [product]);

    function handleOnChange(e, field, setData, callback = (value) => value) {
        setData((data) => ({...data, [field]: callback(e.target.value)}));
    }

    function createProduct() {
        post([PRODUCT], {body: data}).then(onclose);
    }

    function updateProduct() {
        put([PRODUCT], {elem: product._id, body: data}).then(onclose);
    }

    return (
        <>
            <div className="container modalContainer">
                <div onClick={onclose} className="shadow"/>
                <div className="modal">
                    <BsXLg onClick={onclose}/>
                    <h3>{title}</h3>
                    <div className="inputForm">
                        <label htmlFor="name" className="placeholder">Nome</label>
                        <input id="name" className="input" type="text" placeholder=" " required value={data.name || ""}
                               onChange={(e) => handleOnChange(e, "name", setData)}/>
                    </div>
                    <div className="inputForm">
                        <label htmlFor="description" className="placeholder">Descrizione</label>
                        <input id="description" className="input" type="text" placeholder=" " required
                               value={data.description || ""}
                               onChange={(e) => handleOnChange(e, "description", setData)}/>
                    </div>
                    <div className="inputForm">
                        <label htmlFor="cost" className="placeholder">Prezzo</label>
                        <input id="cost" className="input" type="input" placeholder=" " required value={data.cost || ""}
                               onChange={(e) => handleOnChange(e, "cost", setData)}/>
                    </div>
                    {
                        isUpdate ?
                            <button type="text" className="button" onClick={() => updateProduct()}>Aggiorna</button>
                            :
                            <button type="text" className="button" onClick={() => createProduct()}>Crea</button>
                    }
                </div>
            </div>
        </>
    );
}