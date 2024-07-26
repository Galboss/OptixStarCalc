import React from "react";
import { Navigate,Route,Routes } from "react-router-dom";
import BasicLayout from "../layout/basic/BasicLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<BasicLayout/>}>
                <Route path="//" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes;
