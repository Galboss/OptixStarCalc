import React from "react";
import { Navigate,Route,Routes } from "react-router-dom";
import BasicLayout from "../layout/basic/BasicLayout";
import Home from "../pages/Home/Home";

function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<BasicLayout/>}>
                <Route path="//" element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes;
