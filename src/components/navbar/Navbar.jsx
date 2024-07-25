import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-danger text-white" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">OptiXStar</a>
                </div>
            </nav>
        </>
    )
}


export default Navbar 