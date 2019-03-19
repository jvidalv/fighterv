import React, { Component } from 'react';
import General from '../helpers/General';
import Sesion from '../helpers/Sesion';
import Expeditions from './vistas/Expeditions';

class Menu extends Component {

  constructor(p){
    super(p)
    this.state = {
      pj : this.props.personaje,
      vista: 'expeditions'
    }
  }

  cambiarVista(e){
    if(this.state.vista != e.target.getAttribute('value')) {
      this.setState({vista : e.target.getAttribute('value')})
    }
  }

  _returnVista(){
    if(this.state.vista == "expeditions"){
      return <Expeditions personaje={this.state.pj}/>
      } else if(this.state.vista == "inventory"){

      } else if(this.state.vista == "stats"){

        }
  }

  render() {
    if(this.state.pj) {
      return (
        <div className="container">
          <div className="d-flex my-5">
            <div>
              <span className="display-4">Main camp</span>
            </div>
            <div className="ml-auto">
              <div className="d-flex">
                <span className="px-3 pt-3">
                  <strong>{this.state.pj.name}</strong>
                <br/>
                <span className="text-capitalize">{this.state.pj.type}</span> of level {this.state.pj.level}</span>
                <div
                  className="min-pj"
                  style={{backgroundImage:`url(/images/characters/${this.state.pj.image})`}}>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex mt-5">
            <div>
            <ul className="list-group menu-options">
              <li
                  className={
                    this.state.vista == 'expeditions' ? "list-group-item active" : "list-group-item"
                  }
                  value="expeditions"
                  onClick={(e) => this.cambiarVista(e)}>Expeditions</li>
              <li
                  className={
                    this.state.vista == 'inventory' ? "list-group-item active" : "list-group-item"
                  }
                  value="inventory"
                  onClick={(e) => this.cambiarVista(e)}>Inventory</li>
              <li
                  className={
                    this.state.vista == 'stats' ? "list-group-item active" : "list-group-item"
                  }
                  value="stats"
                  onClick={(e) => this.cambiarVista(e)}>Stats</li>
            </ul>
            </div>
            {this._returnVista()}
          </div>
       </div>
      );
    }
    return <div></div>
  }
}

export default Menu;
