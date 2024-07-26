import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

function InputGroup({ label, icon, type, refId }) {
    return (
        <>
            {(label !== undefined, icon !== undefined, type !== undefined) ?
                <div className="input-group mb-3">
                    <span className="input-group-text input-decorator">
                        <Icon icon={icon}/>
                    </span>
                    <div className="form-floating">
                        <input className="form-control shadow-none" id="splitBand" ref={refId} type={type} placeholder={label} />
                        <label>{label}</label>
                    </div>
                </div>
                : <></>}
        </>
    )
}

export default InputGroup;
