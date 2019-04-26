import React, {Component} from 'react';
import {Card, CardHeader} from 'reactstrap';
import CardImg from "reactstrap/es/CardImg";

import Bulbasaur from '../images/Bulbasaur.png';
import Charmander from '../images/Charmander.png';
import Pickachu from '../images/Pickachu.png';
import Squirtle from '../images/Squirtle.png';

import '../styles/Pokemon.styles.css';


class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.getCardImage = this.getCardImage.bind(this);
    }

    componentDidUpdate() {
    }


    getCardImage() {
        switch (this.props.name) {
            case 'Bulbasaur':
                return <CardImg style={{width: "auto"}} height="250px" src={Bulbasaur}/>;
            case 'Squirtle':
                return <CardImg style={{width: "auto"}} height="250px" src={Squirtle}/>;
            case 'Pickachu':
                return <CardImg style={{width: "auto"}} height="250px" src={Pickachu}/>;
            case 'Charmander':
                return <CardImg style={{width: "auto"}} height="250px" src={Charmander}/>;
        }
    }

    render() {


        return (
            <Card onClick={() => this.props.upVote(this.props.name)} className="myCard">
                <CardHeader> {this.props.name}</CardHeader>
                {this.getCardImage()}
            </Card>
        );
    }
}

const mapStateToProps = store => ({});

export default Pokemon;