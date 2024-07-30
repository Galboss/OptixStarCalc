import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Result_Display.css";

function Result_Display({}){


    const [equipment,setEquipment] = useState("P613E");
    return(<>
        <h4>
            <Icon icon={faServer}/>
            &nbsp; Recommended equipment:
            &nbsp; {equipment}
        </h4>
        <hr/>
        <div id="result">
            <div className="cells">
                <div className="image-border">
                    <img src="./img/test.png" alt="" id="img-result" draggable="false"/>
                </div>
            </div>
            <div className="cells">
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident quod et eaque odio ipsa nemo quas praesentium incidunt. Officiis consequuntur atque eos architecto similique corrupti dolores, eveniet explicabo neque!</li>
                    <li>Texto de prueba</li>
                    <li>Texto de prueba</li>
                    <li>Texto de prueba</li>
                    <li>Texto de prueba</li>
                </ul>
            </div>
        </div>
        <div id="description">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolor tempore quo nesciunt cumque quasi in est consectetur itaque vero odit laudantium, temporibus culpa, incidunt maxime et voluptate delectus dignissimos?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolor tempore quo nesciunt cumque quasi in est consectetur itaque vero odit laudantium, temporibus culpa, incidunt maxime et voluptate delectus dignissimos?
            </p>
           

        </div>
    </>)
}

export default Result_Display;