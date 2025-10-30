import React from "react";

export default function ProductCard({ img, alt, nome, descricao }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={img} alt={alt} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text text-muted">{descricao}</p>
        <button className="btn btn-dark w-100">Comprar</button>
      </div>
    </div>
  );
}