import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faUsers, faGaugeHigh, faCalculator, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import InputGroup from "../../components/input/InputGroup";
import "./Home.css"
import Result_Display from "../../components/result_display/Result_Display";
import History from "../../components/history/History";

function Home() {

    let split = useRef(null);
    let users = useRef(null);
    let bandwidth = useRef(null);
    const [result, setResult] = useState(undefined);
    function getData() {
        let data = {
            split: split.current.value,
            users: users.current.value,
            bandwidth: bandwidth.current.value
        };
        setResult(data);
    }

    return (
        <>
            <div className="card-layout">

                <div className="my-card" id="card-1">
                    <h3>
                        <Icon icon={faDatabase}/>&nbsp;
                        Enter the values
                    </h3>
                    <hr />
                    <InputGroup icon={faCaretRight} label="Split ratio per bandwidth" type="number" refId={split} />
                    <InputGroup icon={faUsers} label="Quantity of final users" type="number" refId={users} />
                    <InputGroup icon={faGaugeHigh} label="Bandwidth" type="number" refId={bandwidth} />
                    <hr />
                    <div className="d-grid" id="search">
                        <button className="btn btn-lg btn-outline-danger" onClick={getData}>
                            <Icon icon={faCalculator} />&nbsp;&nbsp;Calculate
                        </button>
                    </div>

                </div>



                <div className="my-card" id="card-2">
                    {result ? JSON.stringify(result) : ""}
                    <Result_Display/>
                </div>



                <div className="my-card" id="card-3">
                    <History />
                </div>
            </div>
        </>
    )
}

export default Home