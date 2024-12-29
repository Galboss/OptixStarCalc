import React from "react";
import { Navigate,Route,Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import DocLayout from "../layout/doc/DocLayout";
import UseTerms from "../pages/Documentation/use_terms/UseTerms";
import BasicLayout from "../layout/basic/BasicLayout";
function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<BasicLayout/>}>
                <Route path="//" element={<Home/>}/>
            </Route>
            <Route path="/documentation" element={<DocLayout/>}>
                <Route path="/documentation/use-terms" element={<UseTerms/>}/>
                <Route path="/documentation/About" element={<About/>}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes;
