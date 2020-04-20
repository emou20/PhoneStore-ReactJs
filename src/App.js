import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import Router from './components/Router';
import PanierBlock from './components/PanierBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PanierBlock />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
