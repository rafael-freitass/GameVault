import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrossel from "../components/Carrrossel/Carrossel";
import VitrineGrid from "../components/VitrineGrid";


export default function MainPage(){
    return(
        <div>
            <Header/>
            <Carrossel/>
            <VitrineGrid/>
            <Footer/>
        </div>
    )
}