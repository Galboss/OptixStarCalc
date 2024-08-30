import React from "react";
import "./Footer.css"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    let year = new Date();
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="flex-container">
                        <div>
                            <a>
                                <h3>
                                    <Icon icon={faLinkedin} />&nbsp;Bryan José Chacón Reyes
                                </h3>
                            </a>
                            <h5>Software Developer</h5>
                        </div>
                        <div>
                            <h2>Bryan Chacón™ &nbsp;{year.getFullYear()}</h2>
                        </div>
                        <div>
                            All the information belongs to Huawei Enterprise
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;