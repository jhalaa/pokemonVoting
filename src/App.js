import React, {Component} from 'react';
import './App.css';
import {pokemon} from './Firebase/firebase';

import Pokemon from './Components/Pokemon';
import Results from './Components/Results';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: null,
            votingDone: false
        }
        this.upVote = this.upVote.bind(this);
    }

    upVote(name) {
        let currentCount = this.state.options != null ? this.state.options[name] : 0;
        pokemon.update({[name]: currentCount += 1})
        this.setState({votingDone: true})
    }

    componentWillMount() {
        pokemon.on('value', ((snapshot) => {
            const dbPoll = snapshot.val();
            console.log(dbPoll)
            this.setState({options: dbPoll})
        })).bind(this);
    }

    componentWillUnmount() {
        this.pokemon.off();
    }

    render() {
        return (
            <div className="App">
                {
                    !this.state.votingDone &&
                    <div>
                        <p className="App-header"> Choose your favorite Pokemon! </p>
                        <Pokemon upVote={this.upVote} name="Squirtle"/>
                        <Pokemon upVote={this.upVote} name="Bulbasaur"/>
                        <Pokemon upVote={this.upVote} name="Pickachu"/>
                        <Pokemon upVote={this.upVote} name="Charmander"/>
                    </div>
                }
                {
                    this.state.votingDone &&
                    <div>
                        <p className="App-header"> The Results are.....</p>
                        <Results options={this.state.options}/>
                    </div>
                }
            </div>
        );
    }


}

export default App;
