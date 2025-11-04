import React, { useState } from 'react';

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SobrePage from './pages/SobrePage';
import ComprarPage from './pages/ComprarPage';

export default function App() {
  const [view, setView] = useState({ name: "main", selectedId: null });

  const openMain = () => setView({ name: "main", selectedId: null });
  const openSobre = () => setView({ name: "sobre", selectedId: null });
  const openDetail = (id) => setView({ name: "detail", selectedId: id });
  const openComprar = (id) => setView({ name: "comprar", selectedId: id });

  if (view.name === "sobre") {
    return <SobrePage onBack={openMain} />;
  }
  if (view.name === "detail") {
    return <DetailPage id={view.selectedId} onBack={openMain} onComprar={openComprar}/>;
  }
  if (view.name === "comprar"){
    return <ComprarPage id={view.selectedId} onBack={openMain}/>
  }
  return <MainPage onSelect={openDetail} onOpenSobre={openSobre} />;
}