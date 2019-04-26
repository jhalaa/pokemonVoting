import React, {Component} from 'react';
import {Card, CardHeader, CardBody, CardTitle} from 'reactstrap';
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
            case 'Bulbasaur':
                return <CardImg top src={Bulbasaur}/>;
            case 'Squirtle':
                return <CardImg top src={Squirtle}/>;
            case 'Pickachu':
                return <CardImg top src={Pickachu}/>;
            case 'Charmander':
                return <CardImg top src={Charmander}/>;
        }
    }

    render() {


        return (
            <Card style={{ display: "inline-block", margin:"20px",width:"35%",height:"35%"}}>
                <CardHeader> {this.props.name}</CardHeader>
                {this.getCardImage()}
            </Card>
        );
    }
}

const mapStateToProps = store => ({});

export default Pokemon;