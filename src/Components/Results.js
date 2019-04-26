import React, {Component} from 'react';
import PieChart from 'react-minimal-pie-chart';
import _ from 'lodash';


class Results extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
    }


    render() {
        console.log(this.props.options)
        const pokemonNames = _.keys(this.props.options);
        return (
            <div>
                <PieChart style={{width: "550px", left: "25%", position: "absolute", margin: "20px"}}
                          data={[
                              {title: pokemonNames[0], value: this.props.options[pokemonNames[0]], color: '#2ae36b'},
                              {title: pokemonNames[1], value: this.props.options[pokemonNames[1]], color: '#3165c1'},
                              {title: pokemonNames[2], value: this.props.options[pokemonNames[2]], color: '#9b58cb'},
                              {title: pokemonNames[3], value: this.props.options[pokemonNames[3]], color: '#cd96a0'},
                          ]}
                          label={(props)=> { return props.data[props.dataIndex].title + " "+ props.data[props.dataIndex].value}}
                          labelStyle={{
                              fontSize: '5px',
                              fontFamily: 'sans-serif',
                              fill: '#121212'
                          }}
                          animate
                />
            </div>
        );
    }
}

export default Results;