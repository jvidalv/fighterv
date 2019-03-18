
class Sesion {

  static guardarSesio (user){
   localStorage.setItem('data', JSON.stringify(user));
  }

  static devolverSesion(data = 'data'){
    return JSON.parse(localStorage.getItem(data))
  }

}

export default Sesion
