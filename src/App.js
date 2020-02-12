import React, {Component} from 'react';
import Register from './components/Register';
import Selector from './components/Selector';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Logo from './components/Logo';
import Sesion from './helpers/Sesion';
import fondo from './images/bg2.jpg'
import wpl from './images/wood-plan-l.png';
import wpr from './images/wood-plank-r.png';

import './App.css';

class App extends Component {

    constructor(s) {
        super(s);
        this.state = {
            email: undefined,
            personaje: undefined,
            page: 0
        };
        this.registrar = this.registrar.bind(this);
        this.desconectarse = this.desconectarse.bind(this);
        this.seleccionarPersonaje = this.seleccionarPersonaje.bind(this);
        this.actualizar = this.actualizar.bind(this)
    }

    componentWillMount() {
        if (Sesion.devolverStorage('email')) {
            this.state.email = Sesion.devolverStorage('email').email;
            if (Sesion.devolverStorage('pj')) {
                this.state.personaje = Sesion.devolverStorage('pj')
            }
        }
    }

    actualizar(personaje) {
        this.setState({personaje: personaje})
    }

    desconectarse() {
        Sesion.borrarStorage('email');
        Sesion.borrarStorage('pj');
        this.setState({email: undefined, personaje: undefined, page: 0})
    }

    registrar(datos) {
        Sesion.guardarSesion(datos);
        this.setState({email: datos.email})
    }

    seleccionarPersonaje(datos) {
        Sesion.guardarPersonaje(datos);
        this.setState({personaje: datos})
    }

    comprobarEmail() {
        if (!this.state.email) {
            return <Register registrar={this.registrar} back={() => this.setState({page: 0})}/>
        } else return this.comprobarPersonaje()
    }

    comprobarPersonaje() {
        if (!this.state.personaje) {
            return <Selector personaje={this.state.personaje} seleccionado={this.seleccionarPersonaje}/>
        } else return <Menu actualizar={this.actualizar} personaje={this.state.personaje}/>
    }

    pageToRender() {
        if (this.state.page == 0) {
            return (
                <div>
                    <Logo/>
                    <div className="d-flex mt-4 button-wrapper">
                        <div
                            onClick={() => this.setState({page: 1})}
                            className="btn-left"
                            style={{backgroundImage: `url(${wpl})`}}
                        >Play!
                        </div>
                        <div
                            onClick={() => this.setState({page: 2})}
                            className="btn-right"
                            style={{backgroundImage: `url(${wpr})`}}
                        >
                            Info
                        </div>
                    </div>
                    <div className="my-4 button-wrapper text-center">
                        <a className="ct-b" href="https://github.com/jvidalv/react-old-fighterv" target="_blank">
                            💻 Check on GitHub
                        </a>
                    </div>
                </div>
            )
        } else if (this.state.page == 1) {
            return this.comprobarEmail()
        } else if (this.state.page == 2) {
            return (
                <div>
                    <Logo/>
                    <div className="mt-4 button-wrapper ct-b">
                        <div className="d-flex">
                            <img src="https://avatars2.githubusercontent.com/u/27777508?s=460&v=4"
                                 style={{width: '35%', height: '35%', borderRadius: '50%'}}
                            />
                            <div className="ml-3">I'm a frontend developer who enjoys creating
                                random web apps on the spare time I have between job and life obligations.<br/>
                                Hope you enjoy it ;)
                            </div>
                        </div>
                        <div
                            onClick={() => this.setState({page: 0})}
                            className="btn-right mt-3"
                            style={{backgroundImage: `url(${wpr})`}}
                        >
                            Back
                        </div>
                    </div>
                </div>)
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="wrapper" style={{backgroundImage: `url(${fondo})`}}>
                    <Navbar key={Math.random()} personaje={this.state.personaje} desconectarse={this.desconectarse}
                            email={this.state.email}/>
                    {this.pageToRender()}
                </div>
            </div>
        );
    }
}

export default App;
