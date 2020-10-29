import React from 'react';
import PlayerList from './components/PlayerList.js'
import Navbar from './components/Navbar.js'
import './App.css';

function App() {
  return (
    <div className="containermain">
     <Navbar/>
     <PlayerList/>
    </div>
  );
}

export default App;
