import React, { Component } from 'react';
import General from '../../helpers/General';
import Zonas from './Zonas';
import Sesion from '../../helpers/Sesion';

class Inventory extends Component {

  constructor(p){
    super(p)
    this.state = {
      pj : this.props.personaje,
    }

  }

  render() {
    if(this.state.pj) {
      return (
        <div className="expeditions-map inventory">
          <div>
            <div className="d-flex titulo">
              <h4>Inventory</h4>
              <div className="ml-auto"> Coins: {this.state.pj.coins} </div>
            </div>
            <ul className="list-group">
              {this.state.pj.inventory.map((item) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center">
                  {item}
                </li>
              ) )}
            </ul>
          </div>
       </div>);
    }
    return <div></div>
  }
}

export default Inventory;
