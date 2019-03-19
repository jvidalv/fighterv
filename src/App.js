import React, { Component } from 'react';
import Header from './routes/Router';
import Register from './components/Register';
import Selector from './components/Selector';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Sesion from './helpers/Sesion';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(s){
    super(s);
    this.state = {
      email : undefined,
      personaje: undefined
    }
    this.registrar = this.registrar.bind(this)
    this.desconectarse = this.desconectarse.bind(this)
    this.seleccionarPersonaje = this.seleccionarPersonaje.bind(this)
  }

  componentWillMount(){
    if(Sesion.devolverStorage('email')){
     this.state.email = Sesion.devolverStorage('email').email
       if(Sesion.devolverStorage('pj')){
         this.state.personaje = Sesion.devolverStorage('pj')
       }
    }
  }

  desconectarse(){
    Sesion.borrarStorage('email')
    Sesion.borrarStorage('pj')
    this.setState({email:undefined, personaje: undefined})
  }

  registrar(datos){
    Sesion.guardarSesion(datos)
    this.setState({email:datos.email})
  }

  seleccionarPersonaje(datos){
     Sesion.guardarPersonaje(datos)
     this.setState({personaje:datos})
  }

  comprobarEmail(){
    if(!this.state.email){
      return <Register registrar={this.registrar} />
    }
    else return this.comprobarPersonaje()
  }

  comprobarPersonaje(){
    if(!this.state.personaje){
      return <Selector personaje={this.state.personaje} seleccionado={this.seleccionarPersonaje} />
    } else return <Menu personaje={this.state.personaje} />
  }

  render() {
    return (
      <div className="container-fluid pt-3" key={(Math.random() * 100)}>
        <div className="wrapper">
        <Navbar desconectarse={this.desconectarse} email={this.state.email}/>
        {this.comprobarEmail()}
        </div>
      </div>
    );
  }
}

export default App;
