import React from "react";

function Closed_manufacturing_plants() {
    return (
        <>
            <section className="Manufacturing_plants">
                <div className="container-lg">
                    <div className="Manufacturing_head">
                        <h1 className="m-0">
                            <img src="/img/red_light.png" alt="" /> Closed
                            Warbot Manufacturing Plants
                        </h1>
                        <button className="Manufacturing_head_btn">
                            <i class="fas fa-redo-alt"></i> Refresh
                        </button>
                    </div>
                    <div className="table_holder">
                        <table>
                            <tr>
                                <th>Staked</th>
                                <th>Time and date staked</th>
                                <th>Time lock</th>
                                <th>Finished on</th>
                                <th>Warbots Manufactured</th>
                                <th>Unclaimed Warbots</th>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td> 15:00 2021-07-23</td>
                                <td> 3 quarters</td>
                                <td>15:00 2021-10-23 </td>
                                <td>1107</td>
                                <td className="halka_edit">
                                    <button className="tb_btn_1">369</button>
                                    <button className="tb_btn_2">
                                        Claim Warbots
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td> 15:00 2021-07-23</td>
                                <td> 1 quarters</td>
                                <td>15:00 2021-10-23 </td>
                                <td>3</td>
                                <td className="halka_edit">
                                    <button className="tb_btn_1">1</button>
                                    <button className="tb_btn_2">
                                        Claim Warbots
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td> 15:00 2021-07-23</td>
                                <td> 1 quarters</td>
                                <td>15:00 2021-10-23 </td>
                                <td>12</td>
                                <td className="halka_edit">
                                    <button className="tb_btn_1">3</button>
                                    <button className="tb_btn_2">
                                        Claim Warbots
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td> 15:00 2021-07-23</td>
                                <td> 2 quarters</td>
                                <td>15:00 2021-10-23 </td>
                                <td>150</td>
                                <td className="halka_edit">
                                    <button className="tb_btn_1">50</button>
                                    <button className="tb_btn_2">
                                        Claim Warbots
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <button className="view_closed">View Active Plants</button>
                </div>
            </section>
        </>
    );
}

export default Closed_manufacturing_plants;
