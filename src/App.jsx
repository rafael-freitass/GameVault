import React, { useState } from 'react';

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

export default function App() {
  const [selectedId, setSelectedId] = useState(null)

  if(selectedId === null){
    return (
      <MainPage onSelect={setSelectedId} />
    );
  } else{
    return (
      <DetailPage id={selectedId} onBack={() => setSelectedId(null)} />
    );
  }

}