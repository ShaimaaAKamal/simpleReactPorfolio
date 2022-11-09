// import './App.css';
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./components/Home/home";
import { Portfolio } from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Portfolio/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
