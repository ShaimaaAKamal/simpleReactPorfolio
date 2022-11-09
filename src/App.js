// import './App.css';
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./components/Home/home";
import { Portfolio } from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Portfolio/>
      <About/>
    </div>
  );
}

export default App;
