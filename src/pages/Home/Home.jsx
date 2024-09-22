import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faUsers, faGaugeHigh, faCalculator, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import InputGroup from "../../components/inputgroup/InputGroup";
import InputGroupSelect from "../../components/inputgroupselect/InputGroupSelect";
import "./Home.css"
import Result_Display from "../../components/result_display/Result_Display";
import History from "../../components/history/History";

import DB from "../../data/data.json"

function Home() {

    let split = useRef(null);
    let users = useRef(null);
    let bandwidth = useRef(null);
    const [uplink,setUplink] = useState(null);
    const [usedPorts,setUsedPorts] = useState(null);
    const [data, setData] = useState(undefined);
    const [result, setResult] = useState(undefined);
    const [expansionPercentage,setExpansionPercentage] = useState(null);
    const [accessPoint, setAccessPoint] = useState(null);
    const [worstScenario, setWorstScenario] = useState(null);
    function getData() {
        if(split.current.value==0)
            return
        if(users.current.value<=0||users.current.value>=17408)
            return
        if(bandwidth.current.value<=0||bandwidth>=10000)
            return
        let data = {
            split: split.current.value,
            users: users.current.value,
            bandwidth: bandwidth.current.value
        };
        setData(data);
    }
    useEffect(()=>{
        if(data!==undefined){
            GetEquipment();
            QuantityUplinks();
        }
    },[data])

    function GetEquipment(){
        debugger
        for(let i = 0; i<DB.length; i++){
            if(users.current.value<=DB[i]["final users"]){
                let ponPorts = DB[i]["final users"]/64;
                let SPratio = UsersPerSplit(data.split);
                if(ponPorts*SPratio>=data.users){
                    setResult(DB[i]);
                    let usedP=Math.ceil(data.users/SPratio)
                    setUsedPorts(usedP);
                    let percentageExpansion=Math.ceil(100-((usedP*100)/ponPorts));
                    setExpansionPercentage(percentageExpansion);
                    setAccessPoint(expansionPercentage>75?true:false);
                    setWorstScenario(CalculateWorstScenario(split));
                    return;
                }
            }
        }
    }
    function QuantityUplinks(){
        if(!data)
            return
        let result = (data.users*data.bandwidth)*data.split;
        result = Math.ceil(result/10000)
        setUplink(result)
    }
    function UsersPerSplit(split){
        switch(split){
            case "0.125":
                return 8;
            case "0.0625":
                return 16;
            case "0.03125":
                return 32;
            case "0.015625":
                return 64
            default:
                return 0;
        }
            
    }
    function CalculateWorstScenario(split){
        let splitr = split;
        let worstScenario = 2500/splitr;
        return worstScenario;
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
                    <InputGroupSelect icon={faCaretRight} label="Split ratio per bandwidth" type="number" refId={split}>
                        <option value="0.125">1:8</option>
                        <option value="0.0625">1:16</option>
                        <option value="0.03125">1:32</option>
                        <option value="0.015625">1:64</option>
                    </InputGroupSelect>
                    <InputGroup icon={faUsers} label="Quantity of final users"
                     type="number" refId={users} step="1" min="0" max="17408"/>
                    <InputGroup icon={faGaugeHigh} label="Bandwidth per user (Mbps)" 
                    type="number" refId={bandwidth}  step="10" max="10000" min="0"/>
                    <hr />
                    <div className="d-grid" id="search">
                        <button className="btn btn-lg btn-outline-danger" onClick={getData}>
                            <Icon icon={faCalculator} />&nbsp;&nbsp;Calculate
                        </button>
                    </div>

                </div>



                <div className="my-card" id="card-2">
                    {/* {result ? JSON.stringify(result) : ""} */}
                    {data!=null||data!=undefined?
                    <>
                        <Result_Display result={result} uplink={uplink} 
                        maxSpeed={data.bandwidth} usedPorts={usedPorts} 
                        expansionPercentage={expansionPercentage}
                        accessPoint={accessPoint}
                        worstScenario={worstScenario}/>
                    </>
                    :<>
                    </>}
                </div>



                <div className="my-card" id="card-3">
                    <History />
                </div>
            </div>
        </>
    )
}

export default Home