import React from 'react'
import homeImage from "./images/home.jpg"

function Home() {
    return (
        <div>
            <section style={{
                position: "absolute",
                top:"80px",
                left:"0",
                minWidth:"100%",
                minHeight:"100%",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${homeImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                verticalAlign: "middle",
                zIndex: "-1",
            }}>
                <div className='container'
                    style={{
                        textAlign: "center",
                    }}>
                    <h1 style={{
                        marginTop: "80px",
                        margin: "30px",
                        position: "center",
                        fontStyle: "italic",
                        fontFamily: "cursive",
                        fontSize: "47px",
                        fontWeight: "bold",
                    }}>Welcome to Student Budgeting rewards App</h1><br />
                </div>

                {/* Left side form */}
                <div className="container" style={{
                    float: "left",
                    marginTop: "15px",
                    width: "500px",
                    paddingLeft: "330px",
                }}>
                    {/* News table */}
                    <div className="news"
                        style={{
                            backgroundImage: "none",
                            textAlign: "left",
                            boxSizing: "content-box",
                            backgroundColor: "#f2f2f2",
                            width: "490px",
                            height: "170px",
                            borderRadius: "12% / 55%",
                            border: "groove 1em #3399ff",
                        }}>
                        <div>
                            <h2 style={{
                                paddingLeft: "32px",
                                padding: "25px",
                                fontFamily: "sans-serif",
                            }}>What news in New Zealand?</h2>
                            <a href="https://www.nzherald.co.nz/"
                                target="_blank"
                                style={{
                                    padding: "60px",
                                    fontSize: "20px",
                                }}>
                                Watch some news
                            </a>
                        </div>
                    </div>

                    {/* Exchange rate table */}
                    <div className="exchangRate"
                        style={{
                            backgroundImage: "none",
                            textAlign: "left",
                            boxSizing: "content-box",
                            backgroundColor: "#f2f2f2",
                            width: "490px",
                            height: "300px",
                            marginTop: "70px",
                            borderRadius: "12% / 55%",
                            border: "groove 1em #3399ff",
                        }}>
                        <div>
                            <h2 style={{
                                paddingLeft: "32px",
                                padding: "25px",
                                fontFamily: "sans-serif",
                            }}>Check exchange rate</h2>
                            <p style={{
                                paddingLeft: "60px",
                                fontSize: "18px",
                            }}>Check through?</p>
                            <a href="https://tools.anz.co.nz/foreign-exchange/fx-rates/"
                                target="_blank"
                                style={{
                                    padding: "60px",
                                    fontSize: "18px",
                                }}>
                                ANZ
                            </a><br /><br />
                            <a href="https://www.bnz.co.nz/personal-banking/international/exchange-rates"
                                target="_blank"
                                style={{
                                    padding: "60px",
                                    fontSize: "18px",
                                }}>
                                BNZ
                            </a><br /><br />
                            <a href="https://www.asb.co.nz/foreign-exchange/foreign-exchange-rates.html"
                                target="_blank"
                                style={{
                                    padding: "60px",
                                    fontSize: "18px",
                                }}>
                                ASB
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side form */}
                <div className="container" style={{
                    float: "right",
                    marginTop: "15px",
                    width: "500px",
                    paddingRight: "850px",
                }}>
                    {/* News table */}
                    <div className="news"
                        style={{
                            backgroundImage: "none",
                            textAlign: "left",
                            boxSizing: "content-box",
                            backgroundColor: "#f2f2f2",
                            width: "490px",
                            height: "500px",
                            borderRadius: "12% / 55%",
                            border: "groove 1em #3399ff",
                        }}>
                        <div>
                            <h2 style={{
                                paddingLeft: "32px",
                                padding: "25px",
                                fontFamily: "sans-serif",
                            }}>Try to manage you budget!</h2>
                            <p className="tutorial"
                                style={{
                                    padding: "60px",
                                    fontSize: "22px",
                                    marginTop: "-60px",
                                }}>
                                Log into your online bank,<br />
                                export a duration of the transactions,<br />
                                download and upload here!</p>
                            <a className="toReader"
                                href="./csvReader"
                                style={{
                                    padding: "60px",
                                    fontSize: "20px",
                                }}>
                                Click here or select in the menu
                            </a><br /><br />
                            <a className="toSupport"
                                href="./support"
                                style={{
                                    padding: "60px",
                                    fontSize: "20px",
                                }}>
                                Or need help?
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer style={{
                clear: "both",
                height: "85px",
                width:"100%",
                paddingTop: "30px",
                backgroundColor: "#333333",
                color: "#ffffff",
                textAlign: "center",
                position:"fixed",
                bottom:"0",
            }}>
                <p>© 2021 Xavier.ai. Unitec Capstone Project</p>
            </footer>    
        </div>
    );
}

export default Home
