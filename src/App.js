import React from 'react';
import './App.scss';
import { NavBar } from './Components/NavBar';
import { Intro } from './Components/Intro';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      {/* <Routes /> */}
    </div>
  );
}

export default App;
