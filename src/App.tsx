import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Component/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='World'/>
    </div>
  );
}

export default App;
