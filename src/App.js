import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Skills from './components/Skills';
import Project from './components/Project';
import End from './components/end';
import Github from './components/Github';
import Tools from './components/Tools';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
      <Github/>
      <Project/>
      <Contact/>
      <End/>
    </div>
  );
}

export default App;
