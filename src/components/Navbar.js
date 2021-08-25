import React, { useState } from "react";
import { useWallet } from "use-wallet";
function Navbar() {
    const wallet = useWallet();
    const ethereum = window.ethereum;

    const [addr, setaddr] = useState("Connect wallet");

    if (ethereum) {
        ethereum.on("accountsChanged", function (accounts) {
            setaddr("Connected");
        });
    }

    if (!ethereum) {
        alert("Please use browser with ethereum wallet");
    }

    function open() {
        document.getElementById("open_menu").style.display = "none";
        document.getElementById("close_menu").style.display = "block";
        document.getElementById("img_menu").style.display = "block";
    }

    function close() {
        document.getElementById("close_menu").style.display = "none";
        document.getElementById("open_menu").style.display = "block";
        document.getElementById("img_menu").style.display = "none";
    }

    // const connect_wallet = async () => {
    //     let accounts;
    //     accounts = await window.ethereum
    //         .request({
    //             method: "eth_requestAccounts",
    //         })
    //         .catch((err) => {
    //             console.log("error in the code");
    //         });
    //     console.log(accounts);
    // };
    return (
        <>
            <section className="Navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="nav_menu_holder">
                            <button
                                className="Nav_menu"
                                id="open_menu"
                                onClick={open}
                            >
                                <img src="/img/list.png" alt="" />
                            </button>
                            <button
                                className="Nav_menu nav_menu_extra"
                                id="close_menu"
                                onClick={close}
                            >
                                <img src="/img/close_menu.png" alt="" />
                            </button>

                            <ul id="img_menu" className="img_menu">
                                <a href="#">
                                    <li>
                                        <img src="/img/Home.png" alt="" />
                                    </li>
                                </a>
                                <a href="#">
                                    <li>
                                        <img src="/img/tank.png" alt="" />
                                    </li>
                                </a>
                                <a href="#">
                                    <li>
                                        <img
                                            src="/img/Manufacturing_center.png"
                                            alt=""
                                        />
                                    </li>
                                </a>
                                <a href="#">
                                    <li>
                                        <img src="/img/Warbots.png" alt="" />
                                    </li>
                                </a>
                                <a href="#">
                                    <li>
                                        <img
                                            src="/img/NanoMachines.png"
                                            alt=""
                                        />
                                    </li>
                                </a>
                                <a href="#">
                                    <li>
                                        <img
                                            src="/img/Marketplace.png"
                                            alt=""
                                        />
                                    </li>
                                </a>
                                <a href="#">
                                    <li>
                                        <img src="/img/NanoNFTs.png" alt="" />
                                    </li>
                                </a>
                            </ul>
                        </div>

                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                WARBOTS
                                <p className="m-0">The future is here</p>
                            </a>
                            <div className="nav_details">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center flex-wrap">
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <img
                                                src="/img/Manufacturing_center.png"
                                                alt=""
                                            />
                                            3
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <img
                                                src="/img/NanoMachines.png"
                                                alt=""
                                            />
                                            5261
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <img src="/img/gem.png" alt="" />
                                            157
                                        </a>
                                    </li>

                                    <li
                                        className="nav-item"
                                        onClick={() => wallet.connect()}
                                        // onClick={connect_wallet}
                                    >
                                        <a className="nav-link " href="#">
                                            <img src="/img/wallet.png" alt="" />
                                            {addr}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Navbar;
