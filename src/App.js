import React, { Component } from 'react';
import Header from './routes/Router';
import Register from './components/Register';
import Selector from './components/Selector';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Sesion from './helpers/Sesion';
import fondo from './images/bg2.jpg'
import logo from './images/logo.png';
import './App.css';

class App extends Component {

  constructor(s){
    super(s);
    this.state = {
      email : undefined,
      personaje: undefined,
      page : 0
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
    this.setState({email:undefined, personaje: undefined, page: 0})
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
      return <Register registrar={this.registrar} back={() => this.setState({page : 0})}/>
    }
    else return this.comprobarPersonaje()
  }

  comprobarPersonaje(){
    if(!this.state.personaje){
      return <Selector personaje={this.state.personaje} seleccionado={this.seleccionarPersonaje} />
    } else return <Menu personaje={this.state.personaje} />
  }

  pageToRender(){
    if(this.state.page == 0){
      return (
        <div>
          <div className="mt-4" style={{textAlign:'center'}}>
            <img src={logo} style={{ backgroundColor: 'white'}} />
          </div>
          <h3 className="mt-4 button-wrapper ct-b">
            A role playing game, about clicking on enemys,
            killing them, retrieve the loot and level up!
          </h3>
          <div className="mt-4 button-wrapper">
            <button  onClick={() => this.setState({page : 1})} type="button" className="btn btn-warning btn-lg btn-block">Play!</button>
            <button  onClick={() => this.setState({page : 2})} type="button" className="btn btn-secondary btn-lg btn-block">Info</button>
          </div>
          <div className="mt-4 button-wrapper text-center">
            <a className="ct-b" href="emailtoo:josepvidalvidal@gmail.com">
             josepvidalvidal@gmail.com ✉️
            </a>
          </div>
        </div>
      )
    } else if(this.state.page == 1){
      return this.comprobarEmail()
    } else if(this.state.page == 2){
      return (
        <div>
          <div className="mt-4" style={{textAlign:'center'}}>
            <img src={logo} style={{ backgroundColor: 'white'}} />
          </div>
          <h3 className="mt-4 button-wrapper ct-b">
            A role playing game, about clicking on enemys,
            killing them, retrieve the loot and level up!
          </h3>
            <div className="mt-4 button-wrapper ct-b">
                  Game developed by Josep Vidal Vidal
                  - 2019 -
                  check it on github: https://github.com/jvidalv/fighterv
                  <button
                    onClick={() => this.setState({page : 0})}
                    type="button"
                    className="btn btn-warning btn-lg btn-block mt-4">
                    Back!
                  </button>
            </div>
        </div>  )
      }
  }

  render() {
    return (
      <div className="container-fluid" key={(Math.random() * 100)} >
        <div className="wrapper" style={{backgroundImage:`url(${fondo})`}}>
        <Navbar desconectarse={this.desconectarse} email={this.state.email}/>
        {this.pageToRender()}
        </div>
      </div>
    );
  }
}

export default App;
