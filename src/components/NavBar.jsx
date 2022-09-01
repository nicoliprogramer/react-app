import React from "react";
import Cartwidget from "./Cartwidget";
import logo from "./img/logo.png"

const Descripcion = () => <p>Cuando no te lo esperas... Ese es el momento perfecto</p>

const NavBar = ({ curso }) => {
    return (
        <div className="row">
            <div className="col-md-12 bg-black text-white p-3">
                <ul className="nav d-flex align-items-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="40px" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disablede link_header">WhatsApp</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  link_header">contacto</a>
                    </li>
                    <a className="navbar-brand" href="/"></a>

                </ul>
                <hr />
                <Descripcion />
            </div>

            <hr />
            <Cartwidget />

        </div>

    )
}


export default NavBar;