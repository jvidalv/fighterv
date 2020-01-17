import React, {Component} from 'react';
import Sesion from '../helpers/Sesion';
import Expeditions from './vistas/Expeditions';
import Inventory from './vistas/Inventory';
import Stats from './vistas/Stats';
import Personaje from '../helpers/Personajes';
import camp from '../images/elf_camp.png';
import pold from '../images/plank-old.png';
import wpl from '../images/wood-plan-l.png';

class Menu extends Component {

    constructor(p) {
        super(p);
        this.state = {
            pj: this.props.personaje,
            vista: 'camp',
            lvl: this.props.personaje.level
        };

        this.raidFinalizada = this.raidFinalizada.bind(this);
        this.state.pj = Personaje.getLevel(this.state.pj)

    }

    cambiarVista(e) {
        if (this.state.vista != e.target.getAttribute('value')) {
            this.setState({vista: e.target.getAttribute('value')})
        }
    }

    raidFinalizada() {
        this.setState({pj: Personaje.getLevel(Sesion.devolverStorage('pj')), vista: 'expeditions'});
        this.props.actualizar(Personaje.getLevel(Sesion.devolverStorage('pj')))
    }

    _camp() {
        return <div>
            <div className="titel-camp" style={{backgroundImage: `url(${pold})`}}>
                <span className="display-4 ct-b">CAMP</span>
            </div>
            <div className="wrapper-camp" style={{backgroundImage: `url(${camp})`}}>
                <div>
                    <div>
                        <div
                            value="expeditions"
                            onClick={(e) => this.cambiarVista(e)}
                            className="camp-icon-r"
                        >Expeditions
                        </div>
                    </div>
                    <div className="d-flex">
                        <div
                            value="inventory"
                            onClick={(e) => this.cambiarVista(e)}
                            className="camp-icon-i"
                        >Inventory
                        </div>
                        <div
                            value="stats"
                            onClick={(e) => this.cambiarVista(e)}
                            className="camp-icon-s"
                        >Stats
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    _titol() {
        if (this.state.vista != "camp") {
            return <div className="titel-camp" style={{backgroundImage: `url(${pold})`, textTransform: 'uppercase'}}>
                <span className="display-4 ct-b">{this.state.vista}</span>
            </div>
        }
    }

    _botoBack() {
        if (this.state.vista != "camp") {
            return <div
                onClick={() => this.setState({vista: 'camp'}, this.raidFinalizada())}
                className="btn-left mt-4"
                style={{backgroundImage: `url(${wpl})`, fontSize: '1.6rem'}}
            >Back to camp
            </div>
        }
    }

    _returnVista() {
        if (this.state.vista == "camp") {
            return this._camp()
        } else if (this.state.vista == "expeditions") {
            return <Expeditions key={Math.random()} zona={undefined} fighting={0} raidfinalizada={this.raidFinalizada}
                                personaje={this.state.pj}/>
        } else if (this.state.vista == "inventory") {
            return <Inventory personaje={this.state.pj}/>
        } else if (this.state.vista == "stats") {
            return <Stats personaje={this.state.pj}/>
        }
    }

    render() {
        if (this.state.pj) {
            return (
                <div className="container mt-4">
                    {this._titol()}
                    {this._returnVista()}
                    {this._botoBack()}
                </div>
            );
        }
        return <div></div>
    }
}

export default Menu;
