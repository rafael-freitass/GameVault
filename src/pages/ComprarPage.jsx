import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import games from "../api/games";

export default function ComprarPage({ id, onBack }) {
    const produto = games.find(g => g.id === Number(id));

    return (
        <main className="checkout-bs d-flex flex-column min-vh-100">
        <Header />

        <section className="container py-5 flex-grow-1 d-flex align-items-center">
            <div className="row justify-content-center w-100">
            <div className="col-12 col-lg-8">
                <div className="text-center mb-4">
                <h1 className="display-6 fw-bold mt-3">
                    Compra <span className="gradiente-texto">realizada!</span>
                </h1>
                <p className="lead text-muted mb-0">
                    Obrigado pela preferência. Enviamos a confirmação para o seu e-mail.
                </p>
                </div>

                <div className="card shadow-sm border-0 bg-body-tertiary">
                <div className="card-body p-4 p-md-5">
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                    <h2 className="h5 mb-0">Resumo do pedido</h2>
                    <span className="badge text-bg-success">Pago</span>
                    </div>

                    <div className="row g-3">
                    <div className="col-12 col-md-6">
                        <div className="border rounded-3 p-3 bg-transparent">
                        <div className="text-muted small">Número do pedido</div>
                        <div className="fw-semibold">{produto.id}</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="border rounded-3 p-3 bg-transparent">
                        <div className="text-muted small">Entrega estimada</div>
                        <div className="fw-semibold">3–7 dias úteis</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="border rounded-3 p-3 bg-transparent">
                        <div className="text-muted small">Pagamento</div>
                        <div className="fw-semibold">Cartão de crédito •••• 1234</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="border rounded-3 p-3 bg-transparent">
                        <div className="text-muted small">Total</div>
                        <div className="fw-semibold">{produto.preco}</div>
                        </div>
                    </div>
                    </div>

                    <div className="alert bg-transparent border mt-4 mb-0" role="alert">
                    Assim que o pedido for despachado, você receberá o código de rastreio por e-mail.
                    </div>

                    <div className="d-flex flex-wrap gap-2 mt-4">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={onBack}
                        aria-label="Voltar para a página anterior"
                    >
                        ← Voltar à vitrine
                    </button>
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