import React from "react";
import Tank_model from "./Tank_model";

function Statistics_tab() {
    return (
        <>
            <section className="For_innovators_tab">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1>Statistics</h1>
                            <p>
                                Praesent dis id aliquet urna enim facilisis sed.
                                Tincidunt nunc, lectus quisque magna praesent
                                vitae. Urna quisque neque ultrices amet!
                            </p>
                            {/* <Tank_model /> */}
                        </div>
                        <div className="col-lg-7 mt-3">
                            <div className="stat_box_holder">
                                <div className="stat_box">
                                    <div className="stat_text">
                                        <p>Warbots in existence</p>
                                        <h1 className="m-0">81</h1>
                                    </div>
                                    <div className="stat_img">
                                        <img src="/img/stat_cog.png" alt="" />
                                    </div>
                                </div>
                                <div className="stat_box">
                                    <div className="stat_text">
                                        <p>Total Manufacturing Plants</p>
                                        <h1 className="m-0">6</h1>
                                    </div>
                                    <div className="stat_img">
                                        <img src="/img/stat_cog.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="stat_box_holder">
                                <div className="stat_box">
                                    <div className="stat_text">
                                        <p>Warbots manufactured per period</p>
                                        <h1 className="m-0">62</h1>
                                    </div>
                                    <div className="stat_img">
                                        <img src="/img/stat_cog.png" alt="" />
                                    </div>
                                </div>
                                <div className="stat_box">
                                    <div className="stat_text">
                                        <p>Manufacturing period in seconds</p>
                                        <h1 className="m-0">120</h1>
                                    </div>
                                    <div className="stat_img">
                                        <img src="/img/stat_cog.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Statistics_tab;
