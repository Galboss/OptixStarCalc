import React from "react";
import "./History_Item.css";

function History_Item({historyItem,setItem}) {
    return (<>
        {(historyItem&&historyItem.result) ?
            <div className="history-item" tabIndex="0" draggable="false" onClick={()=>setItem(historyItem)}>
                <div className="history-item-container" tabIndex="0">
                    <div className="img-container-history">
                        <img src={historyItem.result.image} alt="" draggable="false"/>
                    </div>
                    <div>
                        <p>{historyItem.result.name}</p>
                    </div>
                </div>
            </div>
            : <></>}
    </>);
}

export default History_Item;