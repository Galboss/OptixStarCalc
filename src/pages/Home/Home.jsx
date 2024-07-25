import React from "react";
import { useState, useEffect,useRef } from "react";
import "./Home.css"

function Home() {

    let splitBand = useRef(0);

    return (
        <>
            <div className="card-layout">

                <div className="my-card" id="card-1">
                    <h3>Entry the data</h3>
                    <hr />
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <div className="form-floating">
                            <input className="form-control" id="splitBand" type="number" placeholder="Split ratio per bandwidth" />
                            <label >Split ratio per bandwidth</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <div className="form-floating">
                            <input className="form-control" id="finalUsers" ref={splitBand} type="number" placeholder="Final users" />
                            <label>Final users</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <div className="form-floating">
                            <input className="form-control" id="finalUsers" type="number" placeholder="Bandwidth" />
                            <label>Bandwidth</label>
                        </div>
                    </div>
                    <hr />
                    <div className="d-grid" id="search">
                        <button className="btn btn-lg btn-outline-danger">
                            Calculate
                        </button>
                    </div>

                </div>



                <div className="my-card" id="card-2">

                </div>



                <div className="my-card" id="card-3">
                    <p>Card demo</p>
                </div>
            </div>
        </>
    )
}

export default Home