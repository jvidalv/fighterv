import React, {Component} from 'react';
import General from '../helpers/General';
import Logo from './Logo';
import wpl from '../images/wood-plan-l.png';
import wpr from '../images/wood-plank-r.png';

class Register extends Component {

    state = {
        email: undefined
    };


    enviarRegistro = () => {
        if (this.state.email && General.emailCheck(this.state.email)) {
            this.props.registrar(this.state)
        } else this.setState({alert: 1})
    };

    cambiarEmail(e) {
        this.setState({email: e.target.value})
    }

    alertRegistro() {
        return (
            <div className="alert alert-danger mt-3" role="alert">
                Email empty or not correct!
            </div>
        )
    }

    render() {
        return (
            <div>
                <Logo/>
                <div className="container ct-b content-wrapper">
                    <div className="register-wrapper">
                        <div>
                            <div className="display-4 pt-0 mt-3 mb-3 text-center text-uppercase">
                                Register
                            </div>
                            {this.state.alert && this.alertRegistro()}
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => this.cambiarEmail(e)}
                            />
                            <div className="d-flex mt-3">
                                <div
                                    onClick={this.enviarRegistro}
                                    className="btn-left"
                                    style={{backgroundImage: `url(${wpl})`}}
                                >Go in!
                                </div>
                                <div
                                    onClick={this.props.back}
                                    className="btn-right"
                                    style={{backgroundImage: `url(${wpr})`}}
                                >
                                    Back
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
