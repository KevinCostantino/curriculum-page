import React from 'react';
import Header from './Header';
import Home from './Home'; // Home.js imports Home.css
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './App.css'; // Import App.css AFTER Home.js

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer class="footer">

</footer>
    </div>
    
  );
}

export default App;