import React, { Component } from 'react';
import General from '../helpers/General';
import Sesion from '../helpers/Sesion';
import Expeditions from './vistas/Expeditions';
import Inventory from './vistas/Inventory';
import Stats from './vistas/Stats';
import Personaje from '../helpers/Personajes';

class Menu extends Component {

  constructor(p){
    super(p)
    this.state = {
      pj : this.props.personaje,
      vista: 'expeditions',
      lvl : this.props.personaje.level
    }

    this.raidFinalizada = this.raidFinalizada.bind(this)
    this.state.pj = Personaje.getLevel(this.state.pj)

  }

  cambiarVista(e){
    if(this.state.vista != e.target.getAttribute('value')) {
      this.setState({vista : e.target.getAttribute('value')})
    }
  }

  raidFinalizada(){
     this.setState({pj: Personaje.getLevel(Sesion.devolverStorage('pj')), vista : 'expeditions'})
  }

  _returnVista(){
    if(this.state.vista == "expeditions"){
      return <Expeditions key={Math.random()} zona={undefined} fighting={0} raidfinalizada={this.raidFinalizada} personaje={this.state.pj}/>
      } else if(this.state.vista == "inventory"){
          return <Inventory personaje={this.state.pj}/>
      } else if(this.state.vista == "stats"){
          return <Stats personaje={this.state.pj}/>
        }
  }

  render() {
    if(this.state.pj) {
      return (
        <div className="container">
          <div className="d-flex my-5">
            <div>
              <span className="display-4 ct-b">Main camp</span>
            </div>
            <div className="ml-auto ct-b">
              <div className="d-flex" key={Math.random()}>
                <span className="px-3 pt-3">
                  <strong>{this.state.pj.name}</strong>
                <br/>
                 Level {this.state.pj.level}
                <span className="text-capitalize"> {this.state.pj.type}</span>
                 <br/>
                 Coins: {this.state.pj.coins}</span>
                <div
                  className="min-pj"
                  style={{backgroundImage:`url(/fighterv/images/characters/${this.state.pj.image})`}}>
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
