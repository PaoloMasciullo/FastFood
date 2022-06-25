import React from "react";

export default function ProductCard({name, description, cost}){
    return(
          <div className="card">
              <h3>{name}</h3>
              {/*<img src={img} alt={name}/>*/}
              <p>{description}</p>
              <p>{cost}€</p>
              <div className="buttons">
                  <button>Aggiungi</button>
                  <button>Modifica</button>
                  <button>Elimina</button>
              </div>
          </div>
    );
}