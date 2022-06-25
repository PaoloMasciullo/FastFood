import React, {useState} from "react";
import {BsXLg} from "react-icons/bs";
import {post} from "../../services/Client";
import {PRODUCT} from "../../constants/rete";

export default function ProductModal({onclick}) {
    const [data, setData] = useState({});

    function handleOnChange(e, field, setData, callback = (value) => value) {
        setData((data) => ({...data, [field]: callback(e.target.value)}));
    }

    function handleOnClick(){
        post([PRODUCT], {body:data}).then(onclick);
    }

    return (
        <>
            <div className="container modalContainer">
                <div onClick={onclick} className="shadow"/>
                <div className="modal">
                    <BsXLg onClick={onclick}/>
                    <h3>Nuovo Prodotto</h3>
                    <div className="inputForm">
                        <label htmlFor="name" className="placeholder">Nome</label>
                        <input id="name" className="input" type="text" placeholder=" " onChange={(e) => handleOnChange(e, "name", setData)}/>
                    </div>
                    <div className="inputForm">
                        <label htmlFor="description" className="placeholder">Descrizione</label>
                        <input id="description" className="input" type="text" placeholder=" " onChange={(e) => handleOnChange(e, "description", setData)}/>
                    </div>
                    <div className="inputForm">
                        <label htmlFor="cost" className="placeholder">Prezzo</label>
                        <input id="cost" className="input" type="input" placeholder=" " onChange={(e) => handleOnChange(e, "cost", setData)}/>
                    </div>

                    <button type="text" className="button" onClick={() => handleOnClick()}>Crea</button>
                </div>
            </div>
        </>
    );
}