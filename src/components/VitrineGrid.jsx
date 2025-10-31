import React from "react"
import ProductCard from "./ProductCard";
import games from '../api/games';

export default function VitrineGrid({onSelect}){
    const produtos = games;

    return(
        <div className="container py-5">
            <h2 className="text-center mb-4">Nossos Produtos</h2>
            
            <div className="row g-4 justify-content-center">
                {produtos.map(produto => (
                    
                <div key={produto.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                    <ProductCard
                        onSelect={() => onSelect(produto.id)}
                        img={produto.img}
                        alt={produto.alt}
                        nome={produto.nome}
                        descricao={produto.descricao}
                    />
                </div>
                ))}
            </div>

        </div>
    )
}