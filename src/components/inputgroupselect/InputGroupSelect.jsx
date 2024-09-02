
import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Children } from "react";
import "../inputgroup/InputGroup.css";


function InputGroupSelect({ label, icon, type, refId, children}){
    return(
        <>
            {(label !== undefined, icon !== undefined, type !== undefined) ?
                <div className="input-group mb-3">
                    <span className="input-group-text input-decorator">
                        <Icon icon={icon}/>
                    </span>
                    <div className="form-floating">
                        <select className="form-select shadow-none" ref={refId} type={type}  placeholder={label}>
                            <option value="0" defaultValue>Select one option...</option>
                            {children}
                        </select>
                        <label>{label}</label>
                    </div>
                </div>
                : <></>}
        </>
    )
}

export default InputGroupSelect;