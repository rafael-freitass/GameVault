import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SobrePage({ onBack }) {
  return (
    <main className="sobre-bs d-flex flex-column min-vh-100">
      <Header />

      <section className="container py-5 text-center">
        <span className="badge rounded-pill text-bg-secondary mb-3">
          Projeto acadêmico
        </span>

        <h1 className="display-5 fw-bold mb-2">
          Vitrine de <span className="gradiente-texto">Jogos Retrô</span>
        </h1>

        <p className="lead text-muted mx-auto" style={{ maxWidth: 820 }}>
          Trabalho da disciplina de Desenvolvimento Web (WDev): criar uma vitrine
          de produtos e integrar uma API real de CEP.
        </p>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onBack}
            aria-label="Voltar para a página anterior"
          >
            ← Voltar
          </button>
        </div>
      </section>

      <section className="container pb-5">
        <div className="card shadow-sm border-0 bg-body-tertiary">
          <div className="card-body p-4 p-md-5">
            <h2 className="h3 mb-3">O que é o projeto?</h2>
            <p className="mb-4">
              Esta vitrine com tema de <em>jogos retrô</em> foi criada para praticar
              conceitos de componentes react e consumo de APIs. A integração com o ViaCEP
              permite preencher <strong>logradouro</strong>, <strong>bairro</strong>,{" "}
              <strong>cidade</strong> e <strong>UF</strong> automaticamente a partir do CEP.
            </p>

            <div className="row g-4">
              <div className="col-12 col-lg-6">
                <h3 className="h5">Principais objetivos</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent">
                    ✓ Listar produtos de forma limpa e responsiva
                  </li>
                  <li className="list-group-item bg-transparent">
                    ✓ Detalhes de item com foco em usabilidade
                  </li>
                  <li className="list-group-item bg-transparent">
                    ✓ Integração com <code>viacep.com.br</code>
                  </li>
                  <li className="list-group-item bg-transparent">
                    ✓ Código simples, organizado e extensível
                  </li>
                </ul>
              </div>

              <div className="col-12 col-lg-6">
                <h3 className="h5">Tecnologias</h3>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill text-bg-dark">React.js</span>
                  <span className="badge rounded-pill text-bg-dark">JavaScript</span>
                  <span className="badge rounded-pill text-bg-dark">CSS</span>
                  <span className="badge rounded-pill text-bg-dark">Fetch API</span>
                  <span className="badge rounded-pill text-bg-dark">Bootstrap 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}