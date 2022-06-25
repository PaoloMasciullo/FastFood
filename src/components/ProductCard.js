import React from "react";
import {deleteEl} from "../services/Client";
import {PRODUCT} from "../constants/rete";

export default function ProductCard({id, name, description, cost}){

    console.log("ProductCard: ", id);

    function handleDelete(){
        deleteEl([PRODUCT], {elem: id});
    }

    return(
          <div className="card">
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{cost}€</p>
              <div className="buttons">
                  <button className="button">Modifica</button>
                  <button className="button" onClick={() => handleDelete()}>Elimina</button>
              </div>
          </div>
    );
}