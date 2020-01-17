import React, {Component} from 'react';
import Sesion from '../../helpers/Sesion';
import Enemy from '../../helpers/Enemy';
import goblin_camp from '../../images/goblin_camp.png'

class Zonas extends Component {

    constructor(p) {
        super(p);
        this.state = {
            pj: this.props.personaje,
            zone: this.props.zone,
            items: [],
            number: (Math.floor(Math.random() * 3) + 5),
            numbert: 0,
            continue: 1,
            coins: 0,
            exp: 0
        }
    }

    componentWillUpdate() {
        if (this.state.number <= 0 && this.state.continue == 1) {
            this.state.pj.coins = this.state.pj.coins + this.state.coins;
            this.state.pj.exp = this.state.pj.exp + this.state.exp;
            Sesion.guardarPersonaje(this.state.pj);
            this.setState({continue: 2, number: 0, pj: this.state.pj})
        }
    }

    attack(enemy) {
        enemy.damageDone(this.state.pj.power);
        if (enemy.isDead()) {
            this.state.items.push(enemy.loot.item);
            this.state.pj.inventory.push(enemy.loot.item);
            this.state.number = this.state.number - 1;
            this.setState({
                coins: this.state.coins + enemy.loot.coins,
                exp: this.state.exp + enemy.exp,
                numbert: this.state.numbert + 1
            })
        }
    }

    endRaid() {
        this.props.raidfinalizada()
    }

    _pantallaFinal() {
        return (
            <div className="titulo-lucha raid-end">
                <h3> Raid finished </h3>
                <div> Enemies killed {this.state.numbert} </div>
                <div className="mt-3">
                    <h5>Loot</h5>
                    <div><strong>Experience:</strong> {this.state.exp}</div>
                    <div><strong>Coins:</strong> {this.state.coins}</div>
                    <div style={{maxWidth: '192px'}}>
                        <strong>Items:<br/></strong>
                        <div className="d-flex flex-wrap mt-2">
                            {this.state.items.map((item) => <div className="bg-brown mr-1 mb-1">{item}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    enemyGenerator() {
        var enemy = new Enemy(this.state.zone);
        if (this.state.continue == 1) {
            return (<div key={Math.random()} className="enemy-div">
                <div
                    style={{
                        backgroundColor: 'red',
                        width: '-webkit-fill-available',
                        height: '24px',
                        fontWeight: 'bold'
                    }}>
                    <div style={{backgroundColor: 'green', paddingLeft: '25px', width: '100&', height: '100%'}}>
                        <div style={{position: 'absolute'}}>
                            Life: <span data-damage={this.state.pj.power} id="life">{enemy.life}</span><span
                            style={{display: 'none'}} id="life-hidden">{enemy.life}</span>
                        </div>
                    </div>
                </div>
                <img
                    onClick={() => this.attack(enemy)}
                    src={`/fighterv/images/goblins/${enemy.image}`}
                    className={(Math.random() > 0.5 ? (Math.random() > 0.5 ? (Math.random() > 0.5 ? 'enemy e4' : 'enemy e5') : 'enemy e2') : 'enemy e1')}
                    style={{
                        marginTop: (Math.floor(Math.random() * 250) + 50) + 'px',
                        marginLeft: (Math.floor(Math.random() * 250) + 30) + 'px',
                    }}
                />
                <div className="damage">- {this.state.pj.power}</div>
            </div>)
        } else return this._pantallaFinal()
    }

    render() {
        return (
            <div className={`expeditions-map fighting-no-3 ${this.state.zone}`}
                 style={{backgroundImage: `url(${goblin_camp})`}}>
                <div className="titulo">
                    <div className="d-flex">
                        <div><h4>Goblin camp</h4></div>
                        <div className="ml-auto">Enemies left: {this.state.number}</div>
                    </div>
                    <div className="d-flex">
                        <div className="font-weight-bold mr-3"> Loot</div>
                        <div className="mr-3"> Coins: {this.state.coins}</div>
                    </div>
                </div>
                {this.enemyGenerator()}
            </div>
        )
    }

}

export default Zonas;
