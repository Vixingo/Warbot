import React from "react";
import Manufacturing_plants from "./Manufacturing_plants";
import Tank_model from "./Tank_model";

function For_innovators_tab() {
    return (
        <>
            <section className="For_innovators_tab">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1>Build a Warbot</h1>
                            <p>
                                Praesent dis id aliquet urna enim facilisis sed.
                                Tincidunt nunc, lectus quisque magna praesent
                                vitae. Urna quisque neque ultrices amet massa
                                urna scelerisque magna. Elit turpis amet, a
                                eleifend scelerisque. Nulla orci, sit posuere
                                habitant mauris id in mauris, facilisis.
                            </p>
                            <Tank_model />
                        </div>
                        <div className="col-lg-7">
                            <div className="stake_box">
                                <div className="stake_head">
                                    <div className="stake_text">
                                        <h3>Stake your MMAC</h3>
                                        <p className="m-0">
                                            1 MMAC = 1 Warbot every 90 days
                                        </p>
                                    </div>
                                    <button className="mmac_btn">
                                        361 MMAC
                                    </button>
                                </div>
                                <hr />
                                <div className="stake_input_div">
                                    <label>Deposit amount</label>
                                    <input type="text" placeholder="123" />
                                    <label>Time lock</label>

                                    <input
                                        type="range"
                                        min="0"
                                        max="20"
                                        id="slider"
                                    />

                                    <p className="time_line">
                                        <b>3 quarters </b>
                                        <span> (0.8 years)</span>
                                    </p>
                                    <button className="stake_btn">
                                        Stake MMAC
                                    </button>
                                    <p className="stake_info">
                                        Build <span>369 Warbots</span> a period
                                        by locking your MicroMachines for 3
                                        months for a total of
                                        <span>1107 Warbots</span>.
                                    </p>
                                </div>
                                <hr />
                                <div className="stake_input_div">
                                    <button className="stake_btn2">
                                        Approve Contract
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Manufacturing_plants />
        </>
    );
}

export default For_innovators_tab;
