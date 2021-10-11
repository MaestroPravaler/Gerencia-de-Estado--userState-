import { useState } from "react";

export default function Contador() {
    const [numero, setNumero] = useState(0);

    // function incrementar(){
    //     setNumero(numero + 1)
    // }

    // function decrementar(){
    //     setNumero(numero - 1)
    // }

    // Utilizando arrow function
    const incrementar = () => setNumero(numero + 1);
    const decrementar = () => setNumero(numero - 1);

    return (
        <div>
            <h1>Contador</h1>
            <div>
                <h2>Valor: {numero}</h2>
            </div>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </div>
    );
}
