import React from "react";
import "./History_Item.css";

function History_Item({ name, img }) {
    return (<>
        {(name && img) ?
            <div className="history-item-container">
                <div className="img-container-history">
                    <img src={img} alt="" />
                </div>
                <div>
                    <p>{name}</p>
                </div>
            </div>
            : <></>}
    </>);
}

export default History_Item;