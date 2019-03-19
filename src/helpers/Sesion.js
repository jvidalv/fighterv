
class Sesion {

  static guardarSesion(email){
   return localStorage.setItem('email', JSON.stringify(email));
  }

  static guardarPersonaje(pj){
   return localStorage.setItem('pj', JSON.stringify(pj));
  }

  static devolverStorage(data){
    return JSON.parse(localStorage.getItem(data))
  }

  static borrarStorage(data){
    return localStorage.removeItem(data)
  }

}

export default Sesion
