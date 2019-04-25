import React, {Component} from 'react';
import {Card, CardHeader, CardBody, Media} from 'reactstrap';
import CardImg from "reactstrap/es/CardImg";

import Bulbasaur from '../images/Bulbasaur.png';
import Charmander from '../images/Charmander.png';
import Pickachu from '../images/Pickachu.png';
import Squirtle from '../images/Squirtle.png';


class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.getCardImage = this.getCardImage.bind(this);
    }

    componentDidUpdate() {
    }


    getCardImage() {
        switch (this.props.name) {
            case 'Bulbasaur': return <CardImg src={Bulbasaur} />;
            case 'Squirtle':  return <CardImg src={Squirtle} />;
            case 'Pickachu':  return <CardImg src={Pickachu} />;
            case 'Charmander':  return <CardImg src={Charmander} />;
        }
    }

    render() {


        return (
            <div style={{width:'50px'}}>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardHeader>{this.props.name}</CardHeader>
                    <CardBody>
                            {this.getCardImage()}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = store => ({});

export default Pokemon;