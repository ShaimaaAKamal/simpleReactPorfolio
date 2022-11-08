// import './App.css';
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./components/Home/home";
import { Portfolio } from "./components/Portfolio/Portfolio";
import PortfolioSlide from "./components/Portfolio/PortfolioSlide";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Portfolio/>
      <PortfolioSlide/>
    </div>
  );
}

export default App;
