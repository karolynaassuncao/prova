import React from 'react';
import { Home } from './home';
import { Cabecalho } from './header';
import './App.css';


function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Home/>
    </div>
  );
}

export default App;