import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 bg-white border-t border-gray-100">
        <p className="font-medium">&copy; {new Date().getFullYear()} Vishnu K V. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;