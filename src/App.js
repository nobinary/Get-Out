import React from 'react';
import Nav from './components/Nav'
import {Routes} from './components/routes'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div>
        <header>
          <Nav/>
        </header>
        <main>
          <Routes />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
