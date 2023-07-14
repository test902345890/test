import logo from './logo.svg';
import Steve from './img/steve.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={ { borderRadius: '50%', overflow: 'hidden' }} className="App-logo" >
          <img alt="Steve" src={Steve} />
        </div>
        <h1>Happy Friday!</h1>
      </header>
    </div>
  );
}

export default App;
