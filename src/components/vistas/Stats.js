import React, { Component } from 'react';
import General from '../../helpers/General';
import Zonas from './Zonas';
import Sesion from '../../helpers/Sesion';
import Personaje from '../../helpers/Personajes';

class Stats extends Component {

  constructor(p){
    super(p)
    this.state = {
      pj : this.props.personaje,
    }

  }

  render() {
    if(this.state.pj) {
      return (
        <div className="stats">
          <div>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center bg-red">
                  Level: {this.state.pj.level}
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center bg-red">
                  Experience: {this.state.pj.exp}
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center bg-red">
                  Power: {this.state.pj.power}
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong> Traits </strong>
              </li>
               {this.state.pj.traits.map((trait) => (
                 <li className="list-group-item d-flex justify-content-between align-items-center"
                    key={trait}> - {trait}</li>
               ))}
            </ul>
          </div>
       </div>);
    }
    return <div></div>
  }
}

export default Stats;
