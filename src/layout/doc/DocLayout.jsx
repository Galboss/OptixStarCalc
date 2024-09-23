import React from "react";
import "./DocLayout.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function DocLayout() {
    return (
        <>
            <Navbar />
            <div className="layout-basic">
                <div className="layout-body">
                    <main className="main-component">
                        <div className="container card-box">
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default DocLayout;