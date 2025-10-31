import React, { useState } from "react"
import buscarCep from "../api/buscaCep";
import { mascaraCep, validaCep } from "../utils/mascaraCep";

export default function CampoCep(){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);
    
    function handleChange(e) {
        setCep(mascaraCep(e.target.value));
    }

    async function handleBuscar() {
        const somenteDigitos = cep.replace(/\D/g, "");
        const dados = await buscarCep(somenteDigitos);
        setEndereco(dados);
    }

    return(
        <div className="container mt-3 border">
            <div className="d-flex align-items-center gap-2">
            <input 
                type="text"
                placeholder="Digite seu CEP!"
                value={cep}
                onChange= {handleChange}
                inputMode="numeric"
                autoComplete="postal-code"
                />
            <button className="btn btn-primary" onClick={handleBuscar}>Buscar CEP</button>

            {endereco && !endereco.erro && (
                <div>
                    <div><strong>Logradouro:</strong> {endereco.logradouro}</div>
                    <div><strong>Bairro:</strong> {endereco.bairro}</div>
                    <div><strong>Cidade/UF:</strong> {endereco.localidade} / {endereco.uf}</div>
                </div>
            )}

            {endereco?.erro && (
                <div className="text-danger">Endereço não encontrado!</div>
            )}
            </div>
        </div>
    )
}