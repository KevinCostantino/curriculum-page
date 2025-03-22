import React from 'react';
import Header from './Header';
import Home from './Home'; // Home.js imports Home.css
import About from './About';
import Projects from './Projects';
import ExperienceSkills from './ExperienceSkills';
import Contact from './Contact';
import './App.css'; // Import App.css AFTER Home.js

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <ExperienceSkills />
      <Contact />
    </div>
  );
}

export default App;