import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer";
import "./BasicLayout.css";

function BasicLayout(){
    return(
        <>
            <Navbar/>
            <div className="layout-basic">
                <div className="layout-body">
                    <main className="main-component">
                        <Outlet/>
                    </main>
                    <Footer/>   
                </div>
            </div>
            
        </>
    )
}

export default BasicLayout