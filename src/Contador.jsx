import React, { useState } from "react";

export default function Contador() {
    const [contador, setConte] = useState(0);
   

        const clicar = (event) => {
            event.preventDefault();
            if (contador >= 0) {
               setConte(contador + 5); 
            }
        } 

        const clice = (event) =>{
            event.preventDefault();
            if (contador >= 3) {
               setConte(contador - 3); 
            }
        }

    return (
        <div className='App'>

            <h1 className='resultado'>{contador}</h1>
            <button className='botao1' onClick={clicar}>Somar</button>
            <button className='botao2' onClick={clice}>Subtrair</button>
        </div>
    );
}