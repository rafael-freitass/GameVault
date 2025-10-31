import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import games from "../api/games";

export default function VitrineGrid({ onSelect, searchQuery = "" }) {
  const q = searchQuery.trim().toLowerCase();

  const filtered = q
    ? games.filter((p) => {
        const haystack = `${p.nome} ${p.descricao} ${p.especificacao} ${p.fabricante}`.toLowerCase();
        return haystack.includes(q);
      })
    : games;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Nossos Produtos</h2>

      {filtered.length === 0 ? (
        <p className="text-muted text-center">Nenhum item encontrado para “{searchQuery}”.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filtered.map((produto) => (
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
      )}
    </div>
  );
}