import React from "react";
import "./History_Item.css";

function History_Item({ name, img }) {
    return (<>
        {(name && img) ?
            <a href="#" className="history-item" tabIndex="0" draggable="false">
                <div className="history-item-container" tabIndex="0">
                    <div className="img-container-history">
                        <img src={img} alt="" draggable="false"/>
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
            </a>
            : <></>}
    </>);
}

export default History_Item;