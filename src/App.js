import './App.css';
import Dashboard from './Dashboard';
import { Routes , Route } from "react-router-dom";
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <Routes >
      <Route path='/' element={<Dashboard/>} />
      <Route path='/details/:id' element={<PokemonDetails/>} />
      </Routes >
    </div>
  );
}

export default App;
