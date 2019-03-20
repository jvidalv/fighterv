import React, { Component } from 'react';
import General from '../helpers/General';
import logo from '../images/logo.png';

class Register extends Component {

  state = {
    email : undefined
  }


  enviarRegistro = () => {
    if(this.state.email && General.emailCheck(this.state.email)){
      this.props.registrar(this.state)
    }
    else this.setState({alert: 1})
  }

  cambiarEmail(e){
    this.setState({email : e.target.value})
  }

  alertRegistro(){
    return (
      <div className="alert alert-danger mt-3" role="alert">
        Email empty or not correct!
      </div>
    )
  }

  render() {
    return (
      <div className="container ct-b content-wrapper">
        <div className="register-wrapper">
          <div className="mt-4" style={{textAlign:'center'}}>
            <img src={logo} style={{ backgroundColor: 'white'}} />
          </div>
          <h3 className="mt-4 button-wrapper ct-b">
            A role playing game, about clicking on enemys,
            killing them, retrieve the loot and level up!
          </h3>
          <div>
            <div className="display-4 pt-0 mt-3">
              Register
            </div>
              {this.state.alert && this.alertRegistro()}
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => this.cambiarEmail(e) }
              />
            <button onClick={this.enviarRegistro} type="button" className="btn btn-warning mt-3">Go in!</button>
            <button onClick={this.props.back} type="button" className="btn btn-info mt-3 ml-3">Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
