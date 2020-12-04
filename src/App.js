import logo from './logo.svg';
import './App.css';

import {version} from "./../package.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Versión del programa : {version}
        </p>
        <p>
          Para la gran universidad de valparaiso!
        </p>
        <span> nv otro commits </span>
        
      </header>
    </div>
  );
}

export default App;
