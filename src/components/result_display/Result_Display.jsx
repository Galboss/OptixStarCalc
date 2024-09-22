import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faNetworkWired, faServer, faSquarePollHorizontal, faUpload, faUser, faWandMagic, faWifi } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./Result_Display.css";

function Result_Display({ result, uplink, maxSpeed, 
    usedPorts, expansionPercentage, accessPoint, worstScenario}) {



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
                        <img src={result.image} alt="" id="img-result" draggable="false" />
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
            <h3><Icon icon={faSquarePollHorizontal} />&nbsp;Solution details</h3>
            <hr />
            <div id="result-table">
                <div className="result-cell">
                    <h6><Icon icon={faUpload} />&nbsp;Quantity of uplink ports</h6>
                    <p>{uplink ? (uplink == 1 ?
                        <>
                            One uplink of 10 Gbps is needed
                        </> :
                        <>
                            {uplink} uplinks of 10 Gbps are needed
                        </>
                    ) : <></>} </p>
                </div>
                <div className="result-cell">
                    <h6><Icon icon={faUser} />&nbsp;Max speed in worst scenario</h6>
                    <p>{worstScenario} Mbps</p>
                </div>
                <div className="result-cell">
                    <h6><Icon icon={faNetworkWired} />&nbsp;Service ports used</h6>
                    <p>{usedPorts} Pon port needed</p>
                </div>

                <div className="result-cell">
                    <h6><Icon icon={faArrowUpRightDots}/>&nbsp;Expansion rate available</h6>
                    <p>{expansionPercentage ?
                        <>
                            {expansionPercentage}% expansion available
                        </>
                        : <>
                            No expansion available
                        </>}</p>
                </div>
                <div className="result-cell">
                    <h6><Icon icon={faWifi}/>&nbsp;Support Access Points</h6>
                    <p>
                        {
                            accessPoint?<>Yes, it can support Access Points</>
                            :<>No, it is not recommended</>
                        }
                    </p>
                </div>
                <div className="result-cell">
                    <h6><Icon icon={faWandMagic}/>&nbsp;Recommended SFP</h6>
                    <p>
                        B+
                    </p>
                </div>
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