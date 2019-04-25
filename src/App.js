import React, { Component } from 'react';
import './App.css';
import {pokemon} from './Firebase/firebase';

import Pokemon from './Components/Pokemon';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Choose your favorite pokemon!
                    </p>
                    <ul>
                        <li onClick={pokemon.child("Squirtle").push().set({count: 1})}>Squirtle</li>
                    </ul>
                </header>
                <Pokemon name="Bulbasaur"></Pokemon>
                <Pokemon name="Pickachu"></Pokemon>
                <Pokemon name="Charmander"></Pokemon>
            </div>
        );
    }
}

export default App;
