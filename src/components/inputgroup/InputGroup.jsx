import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "./InputGroup.css";
function InputGroup({ label, icon, type, refId,step,min,max }) {
    return (
        <>
            {(label !== undefined, icon !== undefined, type !== undefined) ?
                <div className="input-group mb-3">
                    <span className="input-group-text input-decorator">
                        <Icon icon={icon}/>
                    </span>
                    <div className="form-floating">
                        <input className="form-control shadow-none" 
                        ref={refId} type={type} placeholder={label} 
                        step={step?step:<></>} min={min?min:<></>} max={max?max:<></>}/>
                        <label>{label}</label>
                    </div>
                </div>
                : <></>}
        </>
    )
}

export default InputGroup;
