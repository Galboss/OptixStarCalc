import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg text-white" >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="#">Opti<span id="X">X</span>star</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/documentation/About">About</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}


export default Navbar 