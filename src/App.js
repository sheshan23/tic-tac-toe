import React from 'react';
import Game from './components/Game';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>   
      <Game/>     
      <Footer/>
    </div>
  );
}

export default App;

