import React from "react";
import { Navigate,Route,Routes } from "react-router-dom";
import BasicLayout from "../layout/basic/BasicLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import DocLayout from "../layout/doc/DocLayout";
import UseTerms from "../pages/Documentation/use_terms/UseTerms";
function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<BasicLayout/>}>
                <Route path="//" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
            </Route>
            <Route path="/documentation" element={<DocLayout/>}>
                <Route path="/documentation/use-terms" element={<UseTerms/>}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes;
