// import './App.css';
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./components/Home/home";
import { Portfolio } from "./components/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Portfolio/>
    </div>
  );
}

export default App;
