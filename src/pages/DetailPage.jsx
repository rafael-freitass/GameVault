import React from "react"
import games from "../api/games"

import Header from "../components/Header"
import Footer from "../components/Footer"
import CampoCep from "../components/CampoCep"

export default function DetailPage({ id, onBack, onComprar }) {
  const produto = games.find(g => g.id === Number(id));

  const handleComprarClick = (e) => {
    e?.preventDefault?.();          // seguro, caso não venha evento
    onComprar?.(id);                // ou onComprar?.(produto?.id)
  };
  
  if (!produto) {
    return (
      <div>
        <Header />
        <div className="container py-5">
          <button className="btn btn-outline-secondary" onClick={onBack}>Voltar</button>
          <h1 className="h4 mt-3">Produto não encontrado</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="container py-5">
        <button className="btn btn-outline-secondary mb-4" onClick={onBack}>
          ← Voltar
        </button>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="ratio ratio-1x1">
                <img
                  src={produto.img}
                  alt={produto.alt || produto.nome}
                  className="img-fluid object-fit-contain rounded-top"
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h1 className="h4 mb-2">{produto.nome}</h1>
                <p className="text-muted mb-0">{produto.especificacao}</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="sticky-top" style={{ top: '90px' }}>
              <div className="card shadow-sm border-0 mb-3">
                <div className="card-body">
                  <p className="text-muted">{produto.descricao}</p>
                  <p className="text-muted mb-1">
                    <span className="fw-semibold">Fabricante:</span> {produto.fabricante}
                  </p>
                  <h2 className="display-6 fw-bold mt-3">{produto.preco}</h2>
                  <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-dark" onClick={handleComprarClick}>Comprar</button>
                  </div>
                </div>
              </div>

              <div className="card shadow-sm border-0">
                <div className="card-header bg-white">
                  <span className="fw-semibold">Calcular frete e prazo</span>
                </div>
                <div className="card-body">
                  <CampoCep />
                  <p className="form-text mt-2">
                    Informe um CEP válido. Ex.: 01310-000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}