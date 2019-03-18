import React, { Component } from 'react';
import General from '../helpers/General';

class Register extends Component {

  state = {
    email : 'a@a.com'
  }

  componentDidUpdate(){
    // console.log(this.state)
  }

  enviarRegistro = () => {
    if(this.state.email && General.emailCheck(this.state.email)){
      this.props.registrar(this.state)
      this.setState({alert: undefined})
    }
    else this.setState({alert: 1})
  }

  cambiarEmail(e){
    this.setState({email : e.target.value})
  }

  alertRegistro(){
    return (
      <div className="alert alert-danger mt-3" role="alert">
        Email vacio i/o incorrecto!
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="register-wrapper">
          <form>
            <div className="display-4 pt-0">
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
            <button onClick={this.enviarRegistro} type="button" className="btn btn-dark mt-2">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
