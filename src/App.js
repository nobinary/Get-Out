import React from 'react';
import Nav from './components/Nav/Nav'
import {Routes} from './components/routes'
import Footer from './components/Footer/Footer.jsx'
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
