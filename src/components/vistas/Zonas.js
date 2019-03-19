import React, { Component } from 'react';
import General from '../../helpers/General';
import Sesion from '../../helpers/Sesion';
import Enemy from '../../helpers/Enemy';
import mapa from '../../images/map.png'
import goblin_camp from '../../images/goblin_camp.png'

class Zonas extends Component {

  constructor(p){
    super(p)
    this.state = {
      pj : this.props.personaje,
      zone : this.props.zone,
      items : [],
      number: (Math.floor(Math.random() * 6) + 3),
      continue: 1,
      coins : 0,
      exp: 0
    }
  }

  componentDidUpdate(){
    console.log(this.state)
    if(this.state.number <= 0){
      console.log("fin")
    }
  }

  attack(enemy){
    enemy.checkLife(this.state.pj.power)
    if(enemy.isDead()){
      this.state.items.push(enemy.loot.item)
      this.state.number = this.state.number -1
      this.state.exp = enemy.exp
      this.setState({coins: this.state.coins + enemy.loot.coins})
    }
  }

  items(){

  }

  enemyGenerator(){
    var enemy = new Enemy(this.state.zone)
    return (<div key={Math.random()} className="enemy-div">
      <div
        style={{backgroundColor:'red', width:'-webkit-fill-available', height: '24px', fontWeight:'bold'}}>
          <div style={{backgroundColor:'green', paddingLeft:'25px', width:'100&', height: '100%'}}>
            <div style={{position: 'absolute'}}>
            Life: <span data-damage={this.state.pj.power} id="life">{enemy.life}</span><span style={{display:'none'}} id="life-hidden">{enemy.life}</span>
            </div>
          </div>
      </div>
      <img
        onClick={() => this.attack(enemy)}
        src={`/images/goblins/${enemy.image}`}
        className="enemy"
        style={{
          marginTop:(Math.floor(Math.random()*100) + 50)+'px',
          marginLeft:(Math.floor(Math.random()*250) + 30)+'px',
          }}
      />
      <div className="damage">- {this.state.pj.power}</div>
    </div>)
  }

  render() {
    return (
        <div className={`expeditions-map fighting-no-3 ${this.state.zone}`} style={{backgroundImage:`url(${goblin_camp})`}}>
          <div className="titulo">
            <div className="d-flex">
              <div><h4>Goblin camp</h4></div>
              <div className="ml-auto">Enemies left: {this.state.number}</div>
            </div>
            <div className="d-flex">
              <div className="font-weight-bold mr-3"> Loot </div>
              <div className="mr-3"> Coins: {this.state.coins}</div>
              {/* <div> Items: {this.state.items.map((item) => <span className="pr-2">{item}</span>)}</div> */}
            </div>
          </div>
          {this.enemyGenerator()}
       </div>
     )
  }

}

export default Zonas;
