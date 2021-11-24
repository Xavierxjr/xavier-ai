import React, { useState } from 'react'
import "./Rewards.css"
import dollor5 from './images/5.jpg';
import dollor10 from './images/10.jpg';
import dollor20 from './images/20.jpg';
import dollor50 from './images/50.jpg';
import rewardImage from "./images/pig.jpg"

function Rewards() {
    const [count5, setCount5] = useState(0);
    const [count10, setCount10] = useState(0);
    const [count20, setCount20] = useState(0);
    const [count50, setCount50] = useState(0);

    //50 points
    const increment5 = () => {
        setCount5(count5 + 1);
    }
    const decrement5 = () => {
        if (count5 > 0) setCount5(count5 - 1);
    }

    //100 points
    const increment10 = () => {
        setCount10(count10 + 1);
    }
    const decrement10 = () => {
        if (count10 > 0) setCount10(count10 - 1);
    }

    //200 points
    const increment20 = () => {
        setCount20(count20 + 1);
    }
    const decrement20 = () => {
        if (count20 > 0) setCount20(count20 - 1);
    }

    //500 points
    const increment50 = () => {
        setCount50(count50 + 1);
    }
    const decrement50 = () => {
        if (count50 > 0) setCount50(count50 - 1);
    }

    return (
        <div>
            <img src="./images/pig.jpg"
                style={{
                    position: "absolute",
                    minWidth: "100%",
                    minHeight: "100%",
                    backgroundImage: `url(${rewardImage})`,
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                    WebkitFilter: "blur(10px)",
                    msFilter: "blur(10px)",
                    filter: "blur(10px)",
                    opacity: "0.8",
                    zIndex: "-1",
                }}></img>

            <div className="container"
                style={{
                    marginTop: "130px",
                    fontSize: "18px",
                }}>
                {/* 5 dollar rewards */}
                <div className="5dollar"
                    style={{
                        width: "360px",
                        height: "175px",
                        float: 'left',
                        marginTop: "-30px",
                    }}>
                    <img src={dollor5} width="360" height="175" />
                    <p style={{ textAlign: 'center', marginTop: "10px" }}>50 points</p>
                    <div className="quantity"
                        style={{ textAlign: 'center' }}>
                        <button className="quantity__minus"
                            onClick={decrement5}
                            style={{
                                width: "20px",
                                height: "28px",
                            }}>
                            -
                        </button>
                        <p className="quantity__input">{count5}</p>
                        <button className="quantity__plus"
                            onClick={increment5}
                            style={{
                                width: "20px",
                                height: "28px",
                            }}>
                            +
                        </button>
                    </div>
                    <button style={{
                        width: "115px",
                        height: "38px",
                        margin: "0 auto",
                        display: "block",
                        marginTop: "15px",
                    }}
                        type="submit"
                        class="btn btn-primary mb-5"
                        onClick={() => {
                            if (window.confirm('Are you sure to select this reward?')) this.onConfirm(Response)
                        }}>
                        Select it!
                    </button>
                </div>

                {/* 10 dollar rewards */}
                <div className="10dollar"
                    style={{
                        width: "360px",
                        height: "175px",
                        float: 'right',
                        marginRight: "60px",
                        marginTop: "-30px",
                    }}>
                    <img src={dollor10} width="360" height="175" />
                    <p style={{ textAlign: 'center', marginTop: "10px" }}>100 points</p>
                    <div className="quantity"
                        style={{ textAlign: 'center' }}>
                        <button className="quantity__minus"
                            onClick={decrement10}
                            style={{
                                width: "20px",
                                height: "28px",
                            }}>
                            -
                        </button>
                        <p className="quantity__input">{count10}</p>
                        <button className="quantity__plus"
                            onClick={increment10}
                            style={{
                                width: "20px",
                                height: "28px",
                            }}>
                            +
                        </button>
                    </div>
                    <button style={{
                        width: "115px",
                        height: "38px",
                        margin: "0 auto",
                        display: "block",
                        marginTop: "15px",
                    }}
                        type="submit"
                        class="btn btn-primary mb-5"
                        onClick={() => {
                            if (window.confirm('Are you sure to select this reward?')) this.onConfirm(Response)
                        }}>
                        Select it!
                    </button>
                </div>

                {/* 20 dollar rewards */}
                <div className="20dollar"
                    style={{
                        width: "360px",
                        height: "175px",
                        float: 'left',
                        marginTop: "240px",
                    }}>
                    <img src={dollor20} width="360" height="175" />
                    <p style={{ textAlign: 'center', marginTop: "10px" }}>200 points</p>
                    <div className="quantity"
                        style={{ textAlign: 'center' }}>
                        <button className="quantity__minus"
                            onClick={decrement20}
                            style={{
                                width: "20px",
                                height: "28px",
                            }}>
                            -
                        </button>
                        <p className="quantity__input">{count20}</p>
                        <button className="quantity__plus"
                            onClick={increment20}
                            style={{
                                width: "20px",
                                height: "28px",
                            }}>
                            +
                        </button>
                    </div>
                    <button style={{
                        width: "115px",
                        height: "38px",
                        margin: "0 auto",
                        display: "block",
                        marginTop: "15px",
                    }}
                        type="submit"
                        class="btn btn-primary mb-5"
                        onClick={() => {
                            if (window.confirm('Are you sure to select this reward?')) this.onConfirm(Response)
                        }}>
                        Select it!
                    </button>
                </div>

                {/* 50 dollar rewards */}
                <div className="50dollar"
                    style={{
                        width: "360px",
                        height: "175px",
                        float: 'right',
                        marginRight: "60px",
                        marginTop: "240px",
                    }}>
                    <img src={dollor50} width="360" height="175" />
                    <p style={{ textAlign: 'center', marginTop: "10px" }}>500 points</p>
                    <div className="quantity"
                        style={{ textAlign: 'center' }}>
                        <button className="quantity__minus"
                            onClick={decrement50}
                            style={{
                                width: "20px",
                                height: "28px",
                            }}>
                            -
                        </button>
                        <p className="quantity__input">{count50}</p>
                        <button className="quantity__plus"
                            onClick={increment50}
                            style={{
                                width: "20px",
                                height: "28px",
                            }}>
                            +
                        </button>
                    </div>
                    <button style={{
                        width: "115px",
                        height: "38px",
                        margin: "0 auto",
                        display: "block",
                        marginTop: "15px",
                    }}
                        type="submit"
                        class="btn btn-primary mb-5"
                        onClick={() => {
                            if (window.confirm('Are you sure to select this reward?')) this.onConfirm(Response)
                        }}>
                        Select it!
                    </button>
                </div>
            </div>
            <footer style={{
                clear: "both",
                height: "85px",
                width: "100%",
                paddingTop: "30px",
                backgroundColor: "#333333",
                color: "#ffffff",
                textAlign: "center",
                position: "fixed",
                bottom: "0",
            }}>
                <p>© 2021 Xavier.ai. Unitec Capstone Project</p>
            </footer>
        </div>
    );
}

export default Rewards
