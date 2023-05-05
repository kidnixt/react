import logo from './logo.svg';
import Texto from './components/Texto';
import './App.css';

function App() {
  return (
    //codigo jsx, se debe tener un solo elemento padre
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          aberga
          <Texto />

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;

/* for -> htmlFor */
/* class -> className */

