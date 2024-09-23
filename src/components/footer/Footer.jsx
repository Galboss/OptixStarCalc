import React from "react";
import "./Footer.css"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
function Footer() {
    let year = new Date();
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="flex-container">
                        <div id="namesLi">
                            <a href="https://www.linkedin.com/in/bryan-j-chac%C3%B3n-reyes-aa118b228/">
                                <h3>
                                    <Icon icon={faLinkedin} />&nbsp;Bryan José Chacón Reyes
                                </h3>
                            </a>
                            <h5>Software Developer</h5>
                            <h5>Optical Product Manager</h5>

                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/bryan-j-chac%C3%B3n-reyes-aa118b228/">
                                <h3>
                                    <Icon icon={faLinkedin} />&nbsp;Joshua Llorente Rodríguez
                                </h3>
                            </a>
                            <h5>Software Developer</h5>
                            <h5>Optical Solution Architect</h5>
                        </div>
                        <div>
                            <p className="footer-description">
                                All technical specifications of the devices belongs to Huawei.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sub-footer ">
                        <h5>Bryan Chacón™ &nbsp;{year.getFullYear()} </h5>
                        <NavLink to="/documentation/use-terms">Use terms</NavLink>
                    </div>
            </footer>
        </>
    )
}

export default Footer;