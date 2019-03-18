import React, { Component } from 'react';
import Header from './routes/Router';
import Register from './components/Register';
import Sesion from './helpers/Sesion';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(s){
    super(s);
    this.state = {
      email : undefined
    }
    this.registrar = this.registrar.bind(this)
  }

  componentWillMount(){
    if(Sesion.devolverSesion('data')){
     this.state.email = Sesion.devolverSesion('data').email
    }
  }

  registrar(datos){
    Sesion.guardarSesio(datos)
    console.log(Sesion.devolverSesion().email)
  }

  selectorPagina(){
    if(!this.state.email){
      return <Register registrar={this.registrar} />
    }
    else return 0;
  }

  render() {
    return (
      <div className="container-fluid pt-3">
        {this.selectorPagina()}
      </div>
    );
  }
}

export default App;
