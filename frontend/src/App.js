import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Menu from './components/Menu';
import Location from './components/Location';
import Order from './components/Order';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <Concept />
      <Menu />
      <Order />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
