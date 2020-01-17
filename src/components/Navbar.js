import React, {Component} from 'react';

class Navbar extends Component {

    _personaje() {
        if (this.props.personaje) {
            return <span><span
                className="">{this.props.personaje.name}, {this.props.personaje.type} of level {this.props.personaje.level}</span><span
                className="px-3">|</span></span>
        }
    }

    render() {
        if (this.props.email) {
            return (
                <div className="container d-flex ct-b">
                    <div className="ml-auto">
                        Hello <strong>{this.props.email}</strong>
                        <span className="px-3">|</span>
                        {this._personaje()}

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
