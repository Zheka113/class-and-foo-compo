import React from 'react';
import './App.css';
import CompoClass from './components/CompoClass';
import FooCompo from './components/CompoFoo';

function App(props) {
  return (
    <div className="App">
      <CompoClass/>
      <FooCompo/>
    
    </div>
  );
}

export default App;