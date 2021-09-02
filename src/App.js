import Header from './components/Header';
import Gameboard from './components/Gameboard';
import './style.css';


//randomize order with every click on a tiles
//also run that function when the component mounts


function App() {
  return (
    <div className="App">
      <Header />
      <Gameboard />
    </div>
  );
}

export default App;
