import React from "react";
import "./History.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import History_Item from "../history_item/History_Item";

function History({StoredItems}){
    return(<>
        <h3>
            <Icon icon={faClock}/>&nbsp;
            History
        </h3>
        <hr />
        <History_Item name={"P613E"} img={"./img/test.png"}/>
    </>)
}

export default History;