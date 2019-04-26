import React, { Component } from 'react';
import './App.css';
import {pokemon} from './Firebase/firebase';

import Pokemon from './Components/Pokemon';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-header"> Choose your favorite Pokemon! </p>
                <Pokemon onClick={pokemon.child("Squirtle").push().set({count: 1})} name="Squirtle"></Pokemon>
                <Pokemon onClick={pokemon.child("Bulbasaur").push().set({count: 1})} name="Bulbasaur"></Pokemon>
                <Pokemon name="Pickachu"></Pokemon>
                <Pokemon name="Charmander"></Pokemon>
            </div>
        );
    }
}

export default App;
