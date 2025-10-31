import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrossel from "../components/Carrossel/Carrossel";
import VitrineGrid from "../components/VitrineGrid";


export default function MainPage({onSelect}){
    return(
        <div>
            <div className="fixed-top">
                <Header/>
            </div>

            <section id="inicio" style={{ scrollMarginTop: "80px", paddingTop: "16px" }}>
                <Carrossel onSelect={onSelect}/>
            </section>
            
            <section id="principal" style={{ scrollMarginTop: "80px", paddingTop: "16px" }}>
                <VitrineGrid onSelect={onSelect}/>
            </section>
            
            <section id="contato" style={{ scrollMarginTop: "80px", paddingTop: "16px" }}>
                <Footer/>
            </section>
        </div>
    )
}