import characters from '../json/characters.json';

class Personaje {

  constructor(pj){
    this.level = 1
    this.name = pj.name
    this.type = pj.type
    this.power = pj.power
    this.image = pj.image
    this.back_history = pj.back_history
    this.posibleTraits = [
      "High life pool",
      "High armour, very resistant to physical damage",
      "Weak against agile foes",
      "Low life pool",
      "High magic resistance",
      "Very high physcal damage",
      "Enters in martial trance",
      "Very low armour",
      "Very high magic power",

    ]
    this.magicPower = this.getMagicPower(pj.power, pj.type)
    this.physicalPower = this.getPhysicalPower(pj.power, pj.type)
    this.traits = this.devolverTraits(pj.type, pj.back_history)
    this.inventory = []
    this.coins = 0
    this.exp = 0
  }

  static getLevel(pj){
    if(pj.exp < 100) return pj
    else {
      pj.level = Math.floor((pj.exp / 100) + 1)
      pj.power = Math.floor(parseInt(pj.power) + (parseInt(pj.level) * 30))
      return pj
    }
  }

  static devolverPersonaje(id){
    return characters.find(char => char.id == id)
  }

  static devolverPersonajes(){
    return characters;
  }

  static devolverStatsBasicos(personaje){
    const pj = new Personaje(personaje)
    return pj;
  }

  getMagicPower(poder, tipo){
    var mpower = poder
    switch(tipo){
      case 'warrior':
        mpower = poder * 20 / 100
      break;
      case 'priest':
        mpower = poder * 35 / 100
      break;
      case 'berserker':
        mpower = poder * 0 / 100
      break;
      case 'mage':
        mpower = poder * 100 / 100
      break;
    }

    return mpower
  }

  getPhysicalPower(poder, tipo){
    var ppower = poder
    switch(tipo){
      case 'warrior':
        ppower = poder * 80 / 100
      break;
      case 'priest':
        ppower = poder * 70 / 100
      break;
      case 'berserker':
        ppower = poder * 100 / 100
      break;
      case 'mage':
        ppower = poder * 0 / 100
      break;
    }
    return ppower
  }

  devolverTraits(tipo, historia){
    var traits = undefined
    switch(tipo){
      case 'warrior':
        traits = this.posibleTraits.filter((val, index) =>  {
          if(index == 0 || index == 2 || index == 1){
            return val
          }
        })
      break;
      case 'priest':
        traits = this.posibleTraits.filter((val, index) =>  {
          if(index == 4 || index == 0 || index == 1){
            return val
          }
        })
      break;
      case 'berserker':
        traits = this.posibleTraits.filter((val, index) =>  {
          if(index == 3 || index == 5 || index == 7 || index == 6){
            return val
          }
        })
      break;
      case 'mage':
        traits = this.posibleTraits.filter((val, index) =>  {
          if(index == 4 || index == 8 || index == 3 || index == 7){
            return val
          }
        })
      break;
    }
    return traits
  }

}

export default Personaje
