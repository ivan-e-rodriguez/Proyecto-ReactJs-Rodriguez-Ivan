import React from "react";
import '../css/style.css'
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="background-navbar">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid col-md-8">
                    <Link className="navbar-brand" to={"/"}>ComputerWorld</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around pr-4" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/categoria/computadoras"}>Computadoras</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/categoria/monitores"}>Monitores</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/categoria/notebooks"}>Notebooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/categoria/graficas"}>Tarjetas Graficas</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to={"/cart"} className="link-dark"><CartWidget /></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;