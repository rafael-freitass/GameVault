import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrossel from "../components/Carrossel/Carrossel";
import VitrineGrid from "../components/VitrineGrid";


export default function MainPage({onSelect}){
    return(
        <div>
            <Header/>
            <Carrossel/>
            <VitrineGrid onSelect={onSelect}/>
            <Footer/>
        </div>
    )
}