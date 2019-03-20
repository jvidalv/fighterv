import React, { Component } from 'react';
import General from '../helpers/General';
import Personaje from '../helpers/Personajes';


class Selector extends Component {

  state = {
    personaje : 0
  }

  constructor(s){
    super(s);
    this.state = {
      personaje : 0
    }
    this.devolverPersonaje = this.devolverPersonaje.bind(this)

  }

  devolverPersonaje(){
    const personaje = Personaje.devolverPersonaje(this.state.personaje)
    const pj = new Personaje(personaje)
    this.props.seleccionado(pj)
  }

  _renderizarPersonaje(){
    const personaje = Personaje.devolverPersonaje(this.state.personaje)
    const pj = Personaje.devolverStatsBasicos(personaje)

    const renderPersonaje = (
      <div className="d-flex mt-4 pantalla-personaje-selector ct-b" key={personaje.id}>
        <div>
          <h1>{personaje.name}</h1>
          <div>
            <h4>A {personaje.back_history} that became a {personaje.type}</h4>
          </div>
          <div>
            <h5>Initial power level of {personaje.power}</h5>
          </div>
            <hr />
          <div>
            <h5>Stats:</h5>
            <span> Magic power: {pj.magicPower} </span><br />
            <span> Physical power: {pj.physicalPower} </span><br />
          </div>
          <hr />
          <div>
            <h5>Traits:</h5>
            { pj.traits.map((trait) => <div key={trait}> - {trait} </div>)  }
          </div>
        </div>
        <img
          src={`/images/characters/${personaje.image}`}
          className="img-selector-personaje"
        />
      </div>
      )

    return renderPersonaje;
  }

  _renderizarPersonajes(){
    const personajes = Personaje.devolverPersonajes()
    const renderPersonajes = personajes.map((pj) =>
      <div onClick={() => this.setState({personaje: pj.id})} key={pj.id}>
        <img
          src={`/images/characters/${pj.image}`}
          className={this.state.personaje != pj.id ? 'no-seleccionado' : ''}
          />
      </div>

      )
    return renderPersonajes;
  }

  render() {
    return (
      <div className="container ct-b">
        <div className="selector-wrapper">
          <div>
            <div className="display-4 pt-0">
              Select your character
            </div>
            {this._renderizarPersonaje()}
            <div className="d-inline-flex listado-personajes">
              {this._renderizarPersonajes()}
            </div>
          </div>
          <div>
            <button onClick={this.devolverPersonaje} type="button" className="btn btn-secondary mt-3">Continue</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Selector;
