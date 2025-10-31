import React from "react";
import "./ProductCard.css";

export default function ProductCard({ onSelect, img, alt, nome, descricao, preco }) {
  return (
    <div className="card shadow-sm h-100">
      <img src={img} alt={alt} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text text-muted flex-grow-1">{descricao}</p>
        <p className="card-text flex-grow-1"><strong>{preco}</strong></p>
        <button className="btn btn-dark w-100 mt-auto" onClick={onSelect}>Comprar</button>
      </div>
    </div>
  );
}