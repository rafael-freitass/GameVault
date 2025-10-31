import React from "react"
import games from "../api/games"

import Header from "../components/Header"
import Footer from "../components/Footer"
import CampoCep from "../components/CampoCep"

export default function DetailPage({ id, onBack }) {
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

  return (
    <div>
      <Header />

      <div className="container py-5">
        <button className="btn btn-outline-secondary mb-3" onClick={onBack}>Voltar</button>
        <h1 className="h3 mb-4">{produto.nome}</h1>

        <div className="row g-4 align-items-start">
          <div className="col-12 col-md-5">
            <div className="ratio ratio-1x1 border rounded-3 bg-light p-2">
              <img
                src={produto.img}
                alt={produto.alt || produto.nome}
                className="w-100 h-100 object-fit-contain rounded-2"
                loading="lazy"
                width="800"
                height="800"
              />
            </div>
          </div>

          <div className="col-12 col-md-7">
            <p className="text-muted">{produto.descricao}</p>
            <h2 className="fw-bold">{produto.preco}</h2>
            <p className="text-muted mb-1">{produto.especificacao}</p>
            <p className="text-muted">Fabricante: {produto.fabricante}</p>
            <button className="btn btn-dark">Comprar</button>

            <div className="mt-4">
              <CampoCep />
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}