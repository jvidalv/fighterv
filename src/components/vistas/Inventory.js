import React, {Component} from 'react';

class Inventory extends Component {

    constructor(p) {
        super(p);
        this.state = {
            pj: this.props.personaje,
        }

    }

    parseItems() {

    }

    render() {
        if (this.state.pj) {
            return (
                <div className="inventory">
                    <div>
                        <div className="d-flex flex-wrap" style={{alignContent: 'space-between'}}>
                            {this.state.pj.inventory.map((item) => (
                                <div
                                    className="inventory-item"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>);
        }
        return <div></div>
    }
}

export default Inventory;
