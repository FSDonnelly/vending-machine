import React from 'react';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import VendingMachine from './VendingMachine'
import './App.css';

function App() {
  return (
    <div className="App">
        <VendingMachine />
        <Chips />
        <Sardines />
        <Soda />
    </div>
  );
}

export default App;
