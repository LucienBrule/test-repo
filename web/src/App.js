import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pretend there's a map here
        </a>
      </header>
    </div>
  );
}

const MapComponent = ()=>{
  return(<div>
    I'm the map, I'm the map, I'm the map
  </div>)
}
export default App;
