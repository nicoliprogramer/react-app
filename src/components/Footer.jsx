import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 bg-black text-white p-3">
                    <hr />
                    <p>{this.props.ubicacion}</p>
                </div>
            </div>
        )
    }
}

export default Footer;