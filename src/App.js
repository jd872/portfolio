import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
        
    </div>
  );
}

export default App;
