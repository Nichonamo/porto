import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <Stars />
      <Header />
      <Navbar />
      <div className="content">
        <About />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
