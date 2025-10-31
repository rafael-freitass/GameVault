import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import games from "../api/games";

export default function VitrineGrid({ onSelect }) {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Nossos Produtos</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {games.map((produto) => (
          <div key={produto.id} className="col d-flex align-items-stretch">
            <ProductCard
              onSelect={() => onSelect(produto.id)}
              img={produto.img}
              alt={produto.alt}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          </div>
        ))}
      </div>
    </div>
  );
}