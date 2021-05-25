import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        pokemones: [],
        isLoaded: false
      }
    }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json ())
      .then(json => {
        this.setState({
          pokemones:json,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Listado de Pokemons
          </p>
        </header>
      </div>
    );
  }

}

export default App;












/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Listado de Pokemon
        </p>
      </header>
    </div>
  );
}

export default App;
*/
