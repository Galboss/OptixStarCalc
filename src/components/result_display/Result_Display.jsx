import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./Result_Display.css";

function Result_Display({ result }) {
    return (result ? (Object.keys(result).length > 0) ?
        <>
            <h4>
                <Icon icon={faServer} />
                &nbsp; Recommended equipment:
                &nbsp; {result.name}
            </h4>
            <hr />
            <div id="result">
                <div className="cells">
                    <div className="image-border">
                        <img src="./img/test.png" alt="" id="img-result" draggable="false" />
                    </div>
                </div>
                <div className="cells">
                    <ul>
                        <li>Final users: {result["final users"]}</li>
                        {result.characteristics.map((x, index) =>
                            <li key={index}>{x}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div id="description">
                <p>{result.description}</p>
            </div>
        </>
        : <>
        </>
        : <>
            <h4>
                <Icon icon={faServer} />
                &nbsp; OLT calculator
            </h4>
            <hr />
            <p>
                Please, fill the form on the left
            </p>
        </>)
}

export default Result_Display;