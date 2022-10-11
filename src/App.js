import './App.css';
import Cards from './components/Cards/Cards';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App bg-green-300">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Cards></Cards>
    </div>
  );
}

export default App;
