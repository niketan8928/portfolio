import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';


function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
