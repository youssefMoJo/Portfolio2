import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
