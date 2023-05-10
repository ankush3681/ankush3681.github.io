import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Skills from './components/Skills';
import Tools from './components/Tools';

function App() {
  return (
    <div className="App">
      <About/>
      <Contact/>
      <Home/>
      <Header/>
      <Skills/>
      <Tools/>
    </div>
  );
}

export default App;
