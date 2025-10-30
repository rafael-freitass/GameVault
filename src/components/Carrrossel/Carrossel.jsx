import React from "react";
import './Carrossel.css';
import games from '../../api/games';

export default function Carrossel() {
  const carouselId = "carouselSnes";

  const itens = games.filter(g => g.nome.includes("SNES"));

  return (
    <section className="py-4">
      <h2 className="text-center mb-3">Jogos de SNES na promoção</h2>

      <div
        id={carouselId}
        className="carousel slide w-75 mx-auto shadow rounded-4 overflow-hidden"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {itens.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {itens.map((item, i) => (
            <div key={item.id} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <div className="snes-frame">
                <img src={item.img} alt={item.alt} className="snes-img" />
              </div>

              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
                <h5 className="mb-1">{item.nome}</h5>
                <p className="mb-2 small">{item.descricao}</p>
                <button className="btn btn-dark w-25">Comprar</button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev bg-black"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
          aria-label="Anterior"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next bg-black"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
          aria-label="Próximo"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
}