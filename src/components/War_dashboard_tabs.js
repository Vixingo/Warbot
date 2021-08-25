import React from "react";
import { useState } from "react";
import "../css/War_dashboard_tabs.css";
import Closed_plants_tab from "./Closed_plants_tab";
import For_innovators_tab from "./For_innovators_tab";
import Statistics_tab from "./Statistics_tab";
function War_dashboard_tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <section className="War_dashboard_tabs">
                <div className="container">
                    <h1>MicroMachine Warbot Manufacturing Center</h1>

                    <div className="tab_btn_holder">
                        <button
                            className={
                                toggleState === 1 ? "tabs active_tabs" : "tabs"
                            }
                            onClick={() => toggleTab(1)}
                        >
                            Dashboard
                        </button>
                        <button
                            className={
                                toggleState === 2 ? "tabs active_tabs" : "tabs"
                            }
                            onClick={() => toggleTab(2)}
                        >
                            Closed Plants
                        </button>
                        <button
                            className={
                                toggleState === 3 ? "tabs active_tabs" : "tabs"
                            }
                            onClick={() => toggleTab(3)}
                        >
                            Statistics
                        </button>
                    </div>

                    <div className="tab_content_holder">
                        <div
                            className={
                                toggleState === 1
                                    ? "content  active-content"
                                    : "content"
                            }
                        >
                            <For_innovators_tab />
                        </div>

                        <div
                            className={
                                toggleState === 2
                                    ? "content  active-content"
                                    : "content"
                            }
                        >
                            <Closed_plants_tab />
                        </div>
                        <div
                            className={
                                toggleState === 3
                                    ? "content  active-content"
                                    : "content"
                            }
                        >
                            <Statistics_tab />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default War_dashboard_tabs;
