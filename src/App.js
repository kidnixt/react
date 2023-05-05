import logo from './logo.svg';
import Texto from './components/Texto';
import Persona from './components/Persona';
import './App.css';

function App() {

  let personas = [
    {id:1, nombre: "johny", edad: 20},
    {id:2, nombre: "fiumba", edad: 30},
    {id:3, nombre: "jose", edad: 40}]

  return (
    //codigo jsx, se debe tener un solo elemento padre
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          aberga
          <Texto />
          <br />
          <Persona nombre = "johny" />
          <Persona nombre = "fiumba" />
          <hr />
          {/*nombres.map((nombre, index) => {
            console.log(nombre + " " + index)
            return <Persona key={index} nombre={nombre} />
          })*/}

          {personas.map((persona) => {return <Persona key={persona.id} {...persona} />})}

          
        </div>
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

