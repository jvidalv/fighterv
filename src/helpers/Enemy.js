import characters from '../json/characters.json';

class Enemy {

  constructor(tipo){
    this.type = this.initType(tipo)
    this.level = this.initLevel()
    this.name = this.initName()
    this.life = this.initLife()
    this.image = this.initImage()
    this.exp = this.initExp()
    this.loot = undefined
    this.items = [
    'Basic sword', 'Basic armour', 'Basic shield',
    'Expert sword', 'Expert armour', 'Expert shield',
    'Legendary sword', 'Legendary armour', 'Legendary shield'
    ]
  }

  initType(tipo){
    const luck = Math.floor(Math.random()*100)
    switch(tipo){
      case 'goblin_camp':
         return (luck > 60 ? (luck > 90 ? 'warchief' : 'mage') : 'warrior')
      default:
        return 'warrior'
      }
  }

  initLevel(){
    switch(this.type){
      case 'warrior':
         return 1
      case 'mage':
         return 2
      case 'warchief':
         return 4
      default:
          return 1
      }
  }

  initName(){
    switch(this.type){
      case 'warrior':
         return 'Goblin warrior'
      case 'mage':
         return 'Goblin darkmage'
      case 'warchief':
         return 'Warchief'
      default:
        return 'Goblin warrior'
      }
  }

  initLife(){
    switch(this.type){
      case 'warrior':
         return this.level * 5400
      case 'mage':
         return this.level * 5100
      case 'warchief':
         return this.level * 6400
      default:
         return this.level * 1400
      }
  }

  initExp(){
    switch(this.type){
      case 'warrior':
         return this.level * 10
      case 'mage':
         return this.level * 12
      case 'warchief':
         return this.level * 30
      default:
         return this.level * 10
      }
  }

  initImage(){
    switch(this.type){
      case 'warrior':
         return 'warrior.png'
      case 'mage':
         return 'mage.png'
      case 'warchief':
         return 'warchief.png'
      default:
         return 'warrior.png'
      }
  }

  checkLife(damage){
    this.life = this.life - damage
    if(this.life < 0){
      this.setLoot()
      return this.setLoot()
    } else return false;
  }

  isDead(){
    return this.life <= 0 ? true : false
  }

  setLoot(){
    switch(this.type){
      case 'warrior':
         this.loot =  {'coins' : Math.floor(Math.random() * 20) + 10, 'item' : this.items[Math.floor(Math.random() * 3 - 1)] }
      case 'mage':
         this.loot =  {'coins' : Math.floor(Math.random() * 40) + 15, 'item' : this.items[Math.floor(Math.random() * 6 - 1)] }
      case 'warchief':
         this.loot =  {'coins' : Math.floor(Math.random() * 80) + 40, 'item' : this.items[Math.floor(Math.random() * 9 - 1)] }
      default:
         return this.loot =  {'coins' : Math.floor(Math.random() * 20), 'item' : this.items[Math.floor(Math.random() * 3 - 1)] }
      }
  }



}

export default Enemy
