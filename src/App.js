
import './App.css';
import Counter from './components/Counter';
import List from './components/List';
import ApiCall from './components/apiCall';

function App() {


  return (
    //codigo jsx, se debe tener un solo elemento padre
    <div className="App">
        <h1>Hola mundo</h1>
        <List/>
        <ApiCall/>
        <Counter/>

        
    </div>
    
  );
}

export default App;

/* for -> htmlFor */
/* class -> className */

