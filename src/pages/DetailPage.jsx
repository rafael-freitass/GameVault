import React from "react"
import games from "../api/games"

import Header from "../components/Header"
import Footer from "../components/Footer"
import CampoCep from "../components/CampoCep"

export default function DetailPage({ id, onBack }){
    
    const produto = games.find(g => g.id === Number(id));
    if (!produto) {
        return (
            <div>
                <Header />

                <div className="container py-5">
                    <button className="btn btn-outline-secondary" onClick={onBack}>Voltar</button>
                    <h1>Produto não encontrado</h1>
                </div>

                <Footer />
            </div>
        );
    }
    return(
        <div>
            <Header />

            <div className="container py-5">
                <button className="btn btn-outline-secondary" onClick={onBack}>Voltar</button>
                <h1 className="h3 mb-3">{produto.nome}</h1>
                <div className="d-flex align-items-center gap-2">
                    <img src={produto.img} alt={produto.alt || produto.nome} className="img-fluid mb-3" />
                    <div>
                        <p className="text-muted">{produto.descricao}</p>
                        <h2 className="fw-bold">{produto.preco}</h2>
                        <p className="text-muted">{produto.especificacao}</p>
                        <p className="text-muted">{produto.fabricante}</p>
                        <button className="btn btn-dark">Comprar</button>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2">                
                    <CampoCep/>
                </div>
            </div>
            <Footer />
        </div>
    )
}