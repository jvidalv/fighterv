import React, { Component } from 'react';
import General from '../helpers/General';
import Sesion from '../helpers/Sesion';

class Navbar extends Component {

  render() {
    if(this.props.email) {
      return (
        <div className="container d-flex ct-b">
          <div className="ml-auto">
            Hello <strong>{this.props.email}</strong>
            <span className="px-3">|</span>
            <span className="small">
              <span className="login-out" onClick={this.props.desconectarse}>Login out</span>
            </span>
          </div>
        </div>
      );
    }
    return <div></div>
  }
}

export default Navbar;
