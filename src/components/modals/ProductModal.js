import React, {useEffect, useState} from "react";
import {BsXLg} from "react-icons/bs";
import {post, put} from "../../services/Client";
import {PRODUCT} from "../../constants/rete";
import {handleOnChange} from "../../services/helpers";

export default function ProductModal({isUpdate, onclose, product, title}) {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(product)
    }, [product]);

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
                        <textarea id="description" placeholder=" " required rows="10" cols="50"
                               value={data.description || ""}
                               onChange={(e) => handleOnChange(e, "description", setData)}/>
                    </div>
                    <div className="inputForm">
                        <label htmlFor="cost" className="placeholder">Prezzo</label>
                        <input id="cost" className="input" type="number" placeholder=" " required value={data.cost || 0}
                               onChange={(e) => handleOnChange(e, "cost", setData)}/>
                    </div>
                    <div className="inputForm">
                        <fieldset>
                            <legend>Seleziona il tipo di prodotto:</legend>
                            <input id="panino" className="input" type="radio" name="type" placeholder=" "
                                   value="Panino"
                                   onChange={(e) => handleOnChange(e, "type", setData)} checked={data.type==="Panino"}/>
                            <label htmlFor="panino" className="placeholder">Panino</label>
                            <input id="snack" className="input" type="radio" name="type" placeholder=" "
                                   value="Snack"
                                   onChange={(e) => handleOnChange(e, "type", setData)} checked={data.type==="Snack"}/>
                            <label htmlFor="snack" className="placeholder">Snack</label>
                            <input id="bevanda" className="input" type="radio" name="type" placeholder=" "
                                   value="Bevanda"
                                   onChange={(e) => handleOnChange(e, "type", setData)} checked={data.type==="Bevanda"}/>
                            <label htmlFor="bevanda" className="placeholder">Bevanda</label>
                            <input id="dessert" className="input" type="radio" name="type" placeholder=" "
                                   value="Dessert"
                                   onChange={(e) => handleOnChange(e, "type", setData)} checked={data.type==="Dessert"}/>
                            <label htmlFor="dessert" className="placeholder">Dessert</label>
                        </fieldset>
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